import { Command } from 'commander';

export interface Feature {
  (command: Command): void;
}
