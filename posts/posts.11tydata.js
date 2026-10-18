// Defaults for every file in posts/. A post with no status, or any status other
// than "published", is a draft: it builds at its URL for preview, carries
// noindex, and is left out of the writing page, posts.json and the feed.
export default {
  layout: "post.njk",
  status: "draft",
  eleventyComputed: {
    permalink: (data) => `/writing/${data.page.fileSlug}/`,
    // The feed plugin reads `summary`.
    summary: (data) => data.standfirst || "",
  },
};
