# Auto-wiki

A simple Vuepress-site with an automated sidebar, as well as a custom post-receive hook to automatically build and deploy the static site.
## Getting Started

```
git clone https://github.com/nikalsh/auto-wiki
```

### Prerequisites

- VPS with any static webserver, SSH, FTP and git

### Installing

- Setup up a git repo on your VPS
- Edit the post-receive with your paths

TARGET = temporary working index

GIT_DIR = git repo

BRANCH = whatever remote branch you to push to for building and deployment

DEPLOY_TARGET = your webservers webspace

DEPLOY_SOURCE = TARGET+/docs/.vuepress/dist*

- Place the post-receive file in your remote git repos "hooks" folder
- Make post-receive an executable
```
chmod +x post-receive
```
- If you want to exclude more files from deletion from the webspace upon deployment, simply edit this line in the script
```
rm -rf !(error|stats|robots.txt)
```
- Make a local git repo, or just point this repos upstream to your remote repo
- Add or edit some README's in the docs folder. See [Vuepress](https://vuepress.vuejs.org/guide/) and for reference
- Push it to your deployment branch
- Done!