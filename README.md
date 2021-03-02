## repo-manager

Currently, it's an opinionated wrapper around `git clone`, that keeps all your repos
in structure. I wrote it to setup ready to go environment with all I need by one command.

To use it, make sure you have proper ssh-key, and set `GITHUB_TOKEN` and `GITHUB_USERNAME`
in your env-variables.

### Examples

```shell
repo-manager clone myorg/myrepo # checkouts a repo into ~/Dev/@myorg/repo
repo-manager clone "myorg/*" # checkouts all @myorg repos into ~/Dev/@myorg/*
repo-manager clone "**" # checkouts all your repos into ~/Dev/@org/repo, you can omit query clone all
repo-manager "**" --dry # dry run
```

## Installation

```
npm istall -g github-repo-manager
yarn global add github-repo-manager
```

## Contribution

May be in future I add plenty of features, but can't promise I will. If you want
to add a feature, just put it into the `./src/features/` directory. 

**ToDo**:

If you just wanna do something, consider the check-list below:

- [ ] `repo-manager delete "org/prefix-*"` delete both local and github repos
- [ ] `repo-manager fetch "org/*"` 
- [ ] `repo-manager info "org/repo"` get some stats like contributros, git-extras, etc
- [ ] add tests
