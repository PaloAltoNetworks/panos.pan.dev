---
id: contributing
hide_title: true
---

# Contributing Guidelines

Thank you for your interest in **Palo Alto Networks** developer documentation!

- [Types of contributions](#types-of-contributions)
- [Use GitHub and Git](#use-github-git)
- [Using markdown and MDX](#using-markdown-and-mdx)
- [CLI and code snippets](#cli-and-code-snippets)
- [Netlify CMS](#netlify-cms)
- [Adding a document](#adding-a-document)
- [More resources](#more-resources)

## Types of contributions

The following are ways you can contribute to Palo Alto Networks developer docs:

- Author and contribute documentation via the developer site repository.
- Report documentation bugs/issues under the developer site repository **Issues** page.
- Request new documentation by opening a request under the developer site repository **Issues** page.

## Using Git and GitHub

> Most of the information in this section can be found in [GitHub Help](https://help.github.com) articles. If you're familiar with Git and GitHub, skip to the [Contribute content](#contribute-content) section for an example `git` flow.

### Setting up your fork of the repository

1. Create a GitHub account. If you haven't done this already, please [join GitHub](https://github.com/join) now.
2. Set up `git` on your machine. Follow the instructions in the [Getting Started](https://help.github.com/en/github/getting-started-with-github/set-up-git) tutorial.
3. Fork the developer site repo. To do this, click the **Fork** button in the upper-right corner of the main repo page.
4. Clone your fork to your local machine using the following command:

```bash
git clone https://github.com/{your user name}/{the developer site repo}.git
```

Next, create a reference to the root repository by entering these commands:

```bash
cd <your cloned repo folder>
git remote add upstream https://github.com/PaloAltoNetworks/{the developer site repo}.git // optionally use the SSH repo URL
git fetch upstream
```

Congratulations! You've now set up your repository.

### Contribute content

To make the contribution process as seamless as possible for you, follow this procedure.

1. Create a new branch.

```bash
git checkout -b {your-branch-name}
```

2. Add or edit existing content.
3. Push changes to your forked repo.

```bash
git add .
git commit -m "{describe the change or contribution you made}"
git push origin {your-branch-name}
```

4. Use GitHub to create a [New pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
5. After the pull request is approved and merged, you may delete the branch.

```bash
git branch -d {your-branch-name}
```

> Try to limit each specific contribution or edit to a branch to help reduce the likelihood of conflicts.

The following are examples of contributions appropriate for a new branch:

- New content
- New or updated media, e.g. images, video, etc.
- Grammar and typo corrections
- Formatting changes

#### Sync forked repo with root

After some time has passed, it might be necessary to sync your local repo with the remote, upstream repo.

1. Fetch remote upstream

```bash
git fetch upstream
```

2. Merge `upstream/master` with local and `origin/master`

```bash
# Merges upstream/master with local master branch
git merge upstream/master master

# Merges upstream/master with local master branch
git push origin master
```

## Markdown and MDX

### MDX

> MDX syntax can be boiled down to being JSX in Markdown. It’s a superset of Markdown syntax that also supports importing, exporting, and JSX. If you're planning use MDX to author your content be sure to use the `.mdx` file extension when naming your file.

[Getting started](https://mdxjs.com/getting-started) with MDX.

### Standard Markdown

All of the articles in this repository use Markdown and MDX. While a complete introduction (and listing of all the syntax) can be found [here](https://guides.github.com/features/mastering-markdown/), let's cover some of the basics first.

Recommended editors:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- [Sublime](https://www.sublimetext.com/)

### Markdown basics

This is a list of the most common markdown syntax:

- **Line breaks vs. paragraphs:** In Markdown there is no HTML `<br />` element. Instead, a new paragraph is designated by an empty line between two blocks of text.
- **Italics:** The HTML `<i>some text</i>` is written `*some text*`
- **Bold:** The HTML `<strong>some text</strong>` element is written `**some text**`
- **Headings:** HTML headings are designated by an number of `#` characters at the start of the line. The number of `#` characters corresponds to the hierarchical level of the heading (for example, `#` = h1, `##` = h2, and `###` = h3).
- **Numbered lists:** To create a numbered (ordered) list, start the line with `1.`. If you want multiple elements within a single list element, format your list as follows:

  1. Notice that there is a space after the '.'

     Now notice that there is a line break between the two paragraphs in the list element, and that the indentation here matches the indentation of the line above.

- **Bulleted lists:** Bulleted (unordered) lists are almost identical to ordered lists except that the `1.` is replaced with either `-`, `*`, or `+`. Multiple element lists work the same way as they do with ordered lists.
- **Links:** The base syntax for a link is `[visible link text](link url)`.
  Links can also have references, which is discussed in the **Link and Image References** section below.
- **Images:** The base syntax for an image is `![alt text for the image](image url)`.
  Images can also have references, which is discussed in the **Link and Image References** section below.
- **In-line HTML:** Markdown allows you to include HTML inline, but this should be avoided.

### Link and image references

Markdown has a really nice feature that lets a user insert a reference instead of a URL for images and links.
Here is the syntax for using this feature:

```markdown
The image below is from [Google][googleweb]

![Google's logo][logo]

[googleweb]: https://www.google.com
[logo]: https://www.google.com/images/srpr/logo3w.png
```

By using references grouped at the bottom of your file, you can easily find, edit, and reuse link and image URLs.

## CLI and code snippets

When using code blocks try to ensure your example is ready to copy and paste. Consider that a reader may be a beginner with no understanding of the difference between a shell prompt and a command. The same applies to inline comments.

Do this:

```bash
curl -X GET http://httpbin.org/get
```

Not this (results in a "command not found" error):

```bash {1}
$ curl -X GET http://httpbin.org/get
```

Sample output:

```console
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.54.0"
  },
  "origin": "137.83.194.100, 137.83.194.100",
  "url": "https://httpbin.org/get"
}
```

## Netlify CMS

Netlify CMS is an open source content management system that can be used with any static site generator to author, review, edit and preview content. It's an alternative to managing content using your IDE/text-editor, GitHub and the `git` CLI. It functions primarily as a markdown/MDX editor with abstractions and support for git flows, e.g. creating feature branches and pull requests.

### Netlify CMS vs `git`

Although it might be tempting to use Netlify CMS over managing content with `git`, it's important to note the key differences between the two.

As of today, our customized Netlify CMS supports editing the following in Docusaurus:

- Documentation sidebars
- Docs (MD and MDX)
- Uploading media/assets\*

> Media/assets uploaded with Netlify CMS will require the author to submit a separate pull/merge request using `git` or GitHub

With respect to **git flow**, Netlify CMS abstracts the following:

- Initial fork of root repository
- Automatic creation of "feature branches" for each contribution, i.e. one branch per modified or added file
- Automatic creation of pull request (when moved to **Review**)

> The **git flow** implemented by Netlify CMS is referred to as "open authoring" and follows the approach that each individual contribution moves from a feature-branch to a pull request. In all cases, pull requests will be reviewed by DevRel before they can be approved and merged into `develop` and (eventually) `master` braches.

Please refer to [Using git and GitHub](#using-git-and-github) for instructions on how to manage content using the `git` CLI, your favorite IDE/text-editor and GitHub.

## Adding a document

This section describes the general steps required for adding a document using either `git` or `Netlify CMS`. In the case of Netlify CMS, it's expected for the user to intuit these steps with the WebUI.

### Frontmatter

Each doc requires a frontmatter header, which Docusaurus uses to determine the following:

- What description, title and tags to inject into the HTML `<meta />` tag
- What sidebar and sidebar category to organize the document under
- A unique document ID

Example:

```text
---
id: panos_api
title: PAN-OS® API
sidebar_label: PAN-OS® API
hide_title: false
description: Overview of the PAN-OS API
keywords:
  - pan-os
  - panos
  - xml
  - api
  - rest
image: /img/panos_apis.svg
---
```

> If you're not sure where to begin, feel free to use an existing doc as boilerplate. Just remember that each document requires a unique ID

### Sidebar

Each developer site will implement one or more documentation sidebars, depending on the number of vertical content areas covered by that site. The relationship between docs, categories and sidebars can be summarized as follows (listed in hierarchical order from left to right):

```text
Sidebar --> Category --> [array of document IDs]
```

Both Netlify CMS and `git` expect the sidebar to be generated from the `sidebars.yml` file located in the `docs` folder.

The following snippet calls out each specific sidebar component (note that an actual sidebars.yml file should not contain comments):

```yaml {3,7,11}
SIDEBARS:
  - categories:
      - category: Overview  <-- Category
        ids:
          - panos_api
      - category: PAN Python SDK
        ids: <-- List of document IDs
          - panpython_qs
          - panpython_apikey
          - panpython_op
    sidebar: panos  <-- Sidebar
```

### Contributing a doc

Contributing a new document can be achieved with the following flow:

- Create a new MD/MDX file under the `docs` folder
- Add the appropriate frontmatter (including the unique ID)
- Add the document ID to an existing or new sidebar/sidebar category

## More resources

- For more information about Markdown, go to [their site][markdown home].
- For more information about using Git and GitHub, first check out the [GitHub Help section](https://help.github.com)
- To learn more about MDX visit https://mdxjs.com/

[markdown home]: https://daringfireball.net/projects/markdown/
