import minimatch from 'minimatch';
import path from 'path';
import { getRepos } from '../lib/octokit';
import { dir } from '../consts';
import { git } from '../lib/git';

import { Feature } from './feature.type';

type Query = string;

const clone: Feature = (program) => {
  program
    .command('clone [query]')
    .description('clone all repos matching given query')
    .option('--dry', 'just show me repos without actually clonning them')
    .action(async (query: Query, options) => {
      let repos = await getRepos();

      if (query) {
        repos = repos.filter(repo => minimatch(repo.full_name, query));
      }

      repos.forEach(i => {
        const gitUrl = `git@github.com:${i.full_name}.git`
        const dest = path.join(dir, `@${i.full_name}`);
        if (options.dry) {
          console.log(i.full_name);
        } else {
          git(gitUrl, dest);
        }
      });
    })
}

export { clone };
