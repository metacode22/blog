const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function getContentLastmod(contentType, slug) {
  const filePath = path.join(process.cwd(), 'src/contents', contentType, `${slug}.mdx`);

  try {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(rawContent);

    if (data.updatedAt) {
      return new Date(data.updatedAt).toISOString();
    }
  } catch {
    // 파일이 없으면 무시
  }

  return undefined;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${process.env.SITE_URL}`,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, url) => {
    const pathname = new URL(url, config.siteUrl).pathname;

    let priority = 0.7;
    let changefreq = 'weekly';
    let lastmod;

    if (pathname === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (['/posts', '/books', '/logs'].includes(pathname)) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    const contentMatch = pathname.match(/^\/(posts|books|logs)\/(.+)$/);

    if (contentMatch) {
      const [, contentType, slug] = contentMatch;
      lastmod = getContentLastmod(contentType, slug);
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: url,
      lastmod: lastmod || new Date().toISOString(),
      changefreq,
      priority,
    };
  },
};
