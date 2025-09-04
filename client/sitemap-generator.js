const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

async function generateSitemap() {
  const domain = "https://www.jobsterritory.com";

  // Static routes
  const routes = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/FractionHiring", changefreq: "weekly", priority: 0.8 },
    { url: "/Payperhire", changefreq: "weekly", priority: 0.8 },
    { url: "/AboutUs", changefreq: "monthly", priority: 0.7 },
    { url: "/ContactUs", changefreq: "monthly", priority: 0.6 },
    { url: "/CaseStudies", changefreq: "weekly", priority: 0.7 },
    { url: "/Blogs", changefreq: "weekly", priority: 0.7 },
    { url: "/TermsandConditions", changefreq: "yearly", priority: 0.5 },
    { url: "/PrivacyPolicy", changefreq: "yearly", priority: 0.5 },
  ];

  // Dynamic routes placeholders
  const caseStudySlugs = ["example-case-1", "example-case-2"]; // replace later with API fetch
  const blogSlugs = ["blog-post-1", "blog-post-2"]; // replace later with API fetch

  caseStudySlugs.forEach((slug) => {
    routes.push({
      url: `/casestudy/${slug}`,
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  blogSlugs.forEach((slug) => {
    routes.push({ url: `/Blog/${slug}`, changefreq: "weekly", priority: 0.7 });
  });

  // Create sitemap
  const stream = new SitemapStream({ hostname: domain });
  routes.forEach((route) => stream.write(route));
  stream.end();

  const data = await streamToPromise(stream);
  fs.writeFileSync("./public/sitemap.xml", data.toString());

  console.log("✅ Sitemap generated at public/sitemap.xml");
}

generateSitemap();
