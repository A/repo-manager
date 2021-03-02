import { octokit } from './octokit';
import { user } from '../../consts';

type Repo = {
  full_name: string;
  private: boolean;
  ssh_url: string;
  name: string;
  org: string
}

type Org = {
  login: string;
}

export const getRepos = async (): Promise<Repo[]> => {
  const orgRepos = await getOrgsRepos();
  const userRepos = await getUserRepos();
  return [].concat(userRepos, orgRepos);
}

export const getOrgs = async () => {
  const res = await octokit.request('/user/orgs', { username: user });
  return res.data.map((i: Org) => i.login);
}

export const getOrgsRepos = async () => {
  const orgs = await getOrgs();
  const requests = orgs.map((i: Org) => {
    return octokit.request(`/orgs/${i}/repos`, { org: i, per_page: 200 })
  }) 
  const responses = await Promise.all(requests);
  // @ts-ignore
  return responses.map(i => i.data).flat()
}

export const getUserRepos = async () => {
  return (await octokit.request('/user/repos', { per_page: 200 })).data;
}
