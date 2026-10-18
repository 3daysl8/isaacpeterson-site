# isaacpeterson.au

Personal site. Hand-written static HTML, plus a small Eleventy build for the blog.

Eleventy only treats `.md` and `.njk` files as templates. Every other page
(index, about, made/, skills, kits) is copied into `_site/` byte for byte, so
editing those pages works exactly as before.

## Files

```
index.html, about.html, …   Hand-written pages. Copied as-is.
site.css                    Shared design tokens and grid.
blog.css                    Blog post styles only (loaded by post pages).
posts/<slug>.md             Blog posts. Published at /writing/<slug>/.
_data/external.json         Off-site posts (Substack, LinkedIn) listed on the writing page.
writing.njk                 Builds /writing.html from posts/ + external.json.
posts.json.njk              Builds /posts.json (read by the homepage "Latest" cell).
_includes/                  Post layout and shared header/footer for generated pages.
eleventy.config.js          Build config.
.pages.yml                  Pages CMS config (browser editor for posts/).
```

`posts.json` and `writing.html` are generated. Do not recreate them by hand.

## Publishing a post

Commit `posts/<slug>.md`. The filename is the URL slug: lowercase, numbers and
hyphens only. The content hub does this automatically. Pages CMS does it from
the browser.

```yaml
---
title: "Post title"
date: 2026-10-18
standfirst: "One or two sentences for the page, the writing list and link previews."
tag: "AI & me"
status: "draft"            # "published" to list it. Anything else is a draft.
image: "assets/posts/<slug>/hero.webp"   # optional, 1200x630 is best for previews
substack_url: ""           # optional, shows "Also on Substack"
ai_label: ""               # "", "ai_written" (Made with AI) or "mostly_ai" (Mostly AI)
hub_id: ""                 # set by the content hub
---
```

Drafts build at their URL so you can preview them. They carry `noindex` and are
left out of the writing page, `posts.json` and `feed.xml`.

Markdown is never run through a template engine, so `{{ }}` in a post renders
as literal text. Two extras:

```markdown
![Alt text](/assets/posts/<slug>/shot.webp "Caption under the image")

::: callout Optional title
Callout body, in markdown.
:::
```

Raw HTML is allowed too.

## Off-site posts

To list a LinkedIn or Substack post that has no page here, add it to the top of
`_data/external.json`, in the same shape as before:

```json
{ "tag": "Process", "title": "Title", "date": "2026-07", "readTime": "3 min read", "url": "https://…", "image": "assets/x.webp" }
```

## Local

```
npm install
npm start          # http://localhost:8080, rebuilds on save
npm run build      # writes _site/
```

## Netlify

`netlify.toml` sets build command `npm run build` and publish directory `_site`.
Every push to main redeploys. Pull requests get deploy previews.

`_redirects` holds the permanent download links ("front doors").
