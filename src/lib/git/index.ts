import { execSync } from 'child_process';
import { existsSync } from 'fs';
import untildify from 'untildify';

export const git = (url: string, dest: string) => {
  const isExist = existsSync(untildify(dest));
  if (isExist) {
    console.log(`${dest} already exists, skipping`);
    return;
  }
  execSync(`git clone ${url} ${untildify(dest)}`, {
    stdio: 'inherit',
  });
};
