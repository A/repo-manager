import { Octokit } from "@octokit/core";
import { token } from '../../consts';

const octokit = new Octokit({ auth: token });

export { octokit };
