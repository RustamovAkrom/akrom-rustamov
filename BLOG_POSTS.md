# Blog posts

Each article has one folder named with its stable URL slug. Add one MDX file per site language:

posts/<slug>/uz.mdx
posts/<slug>/ru.mdx
posts/<slug>/en.mdx

Keep the same slug in all three files and set locale to uz, ru, or en in each file's frontmatter. Translate the title, description, tags, reading time, and article body. The site selects the file matching the active language; if a translation is absent, the detail page shows a localized message.

Example folder: posts/scaling-postgresql-with-pgbouncer/
