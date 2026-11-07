import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    readingTime: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    locale: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post.slug}`,
    },
    formattedDate: {
      type: "string",
      resolve: (post) => {
        const dateLocale = post.locale === "ru" ? "ru-RU" : post.locale === "uz" ? "uz-UZ" : "en-US";
        return new Date(post.date).toLocaleDateString(dateLocale, {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});
