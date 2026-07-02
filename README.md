# isaacpeterson.au

Personal site. Static HTML, no build step, no framework.

## Files

```
index.html      The whole site. Design tokens documented at the top of the <style> block.
posts.json      The feed. This is the only file that changes when publishing a post.
assets/         Hero illustration and tool screenshots.
```

## Updating the feed

Add an entry to the `posts` array in `posts.json` and commit:

```json
{
  "tag": "Process",
  "title": "Title of the post",
  "date": "2026-07",
  "url": "https://www.linkedin.com/posts/..."
}
```

The site sorts newest first by date. `url` can be `null` while a post has no
public link. No HTML edits are ever needed to publish.

This file is the contract for future automation: when the n8n pipeline is
ready to publish to the site, it commits to `posts.json` and Netlify
redeploys. Nothing else changes.

## Deploying to Netlify

1. Push this folder to a GitHub repo (public or private).
2. In Netlify: Add new site → Import an existing project → pick the repo.
3. Build command: none. Publish directory: `/` (the repo root).
4. Deploy, then add the custom domain `isaacpeterson.au` under
   Domain settings and follow the DNS instructions.

Every push to the main branch redeploys automatically.

## Before first deploy

- Replace `YOUR-LINKEDIN-HANDLE` (2 places in index.html) with the real
  LinkedIn profile slug.
- Replace `YOUR-GITHUB-HANDLE` (2 places) with the real GitHub username.
- The Psychosocial Hazards Employer Hub card still links to `#` — add the
  live URL when ready.
