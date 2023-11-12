---
title: Getting Started
author: Beaumois
date: 2023-11-12 22:30:00 +0800
categories: [Blogging, Tech]
tags: [getting started]
pin: true
img_path: '/posts/20231112'
---


> This is work in progress.
{: .prompt-warning }

## Her comes the sun

Follow the instructions in the [Jekyll Docs](https://jekyllrb.com/docs/installation/) to complete the installation of the basic environment. [Git](https://git-scm.com/) also needs to be installed.

## Installation

### Creating a New Site

There are two ways to create a new repository for this theme:

- [**Using the Chirpy Starter**](#option-1-using-the-chirpy-starter) - Easy to upgrade, isolates irrelevant project files so you can focus on writing.

#### Option 1. Using the Chirpy Starter

Sign in to GitHub and browse to [**Chirpy Starter**][starter]
click the button <kbd>Use this template</kbd> and name the new `USERNAME`

#### Option 2. GitHub Fork

Sign in to GitHub to [fork **Chirpy**](https://github.com/cotes2020/jekyll-theme-chirpy/fork).

Next, clone your site to local machine. In order to build JavaScript files later, we need to install [Node.js][nodejs], and then run the tool:

```console
$ bash tools/init
```

The above command will:

1. Check out the code to the [latest tag][latest-tag] (to ensure the stability of your site: as the code for the default branch is under development).
2. Remove non-essential sample files and take care of GitHub-related files.
3. Build JavaScript files and export to `assets/js/dist/`{: .filepath }, then make them tracked by Git.
4. Automatically create a new commit to save the changes above.

## Usage

### Configuration

Update the variables:

- `url`
- `avatar`
- `timezone`
- `lang`

### Running Local Server

After a few seconds, the local service will be published at _<http://127.0.0.1:4000>_.

## Deployment

Before the deployment begins, check out the file [**project site**](https://help.github.com/en/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites) 

### Deploy by Using GitHub Actions

There are a few things to get ready for.

- If you're on the GitHub _Free_ plan, keep your site repository public.
- If you have committed 

At this point, you can go to the URL indicated by GitHub to access your site.

### Manually Build and Deploy

