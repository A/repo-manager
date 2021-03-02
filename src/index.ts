#!/usr/bin/env node

import { Command } from 'commander';
import * as features from './features';

const program = new Command();


Object.keys(features)
  .forEach(feature => {
    const fn = features[feature];
    if ('function' === typeof fn) {
      fn(program);
    }
  });

program.description(require('../package.json').description)
program.description('ololo')
program.version(require('../package.json').version)
program.parse(process.argv);
