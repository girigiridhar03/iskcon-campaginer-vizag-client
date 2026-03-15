import fs from "node:fs/promises";
import path from "node:path";

const RESERVED_SLUGS = new Set([
  "contact",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml",
]);

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getBaseHtml = async () => {
  const distPath = path.join(process.cwd(), "dist", "index.html");
  const sourcePath = path.join(process.cwd(), "index.html");

  try {
    return await fs.readFile(distPath, "utf8");
  } catch {
    return fs.readFile(sourcePath, "utf8");
  }
};

const injectMetaTags = (html, metaMarkup) =>
  html.includes("</head>")
    ? html.replace("</head>", `${metaMarkup}\n  </head>`)
    : html;

const buildMetaMarkup = ({ title, description, imageUrl, url }) => `
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta property="og:site_name" content="ISKCON Gambiram" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
    <link rel="canonical" href="${escapeHtml(url)}" />`;

const withUpdatedTitle = (html, title) =>
  html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

export default async function handler(req, res) {
  const slug = req.query.slug;
  const html = await getBaseHtml();

  if (!slug || RESERVED_SLUGS.has(slug)) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
    return;
  }

  const frontendBaseUrl = "https://campaigns.harekrishnavizag.org";
  const apiBaseUrl =
    process.env.SHARE_CAMPAIGNER_API_BASE_URL?.replace(/\/$/, "") ||
    process.env.VITE_APP_BASE_URL?.replace(/\/$/, "");

  if (!apiBaseUrl) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
    return;
  }

  try {
    const response = await fetch(
      `${apiBaseUrl}/campaigner/details/${encodeURIComponent(slug)}`,
    );

    if (!response.ok) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.status(200).send(html);
      return;
    }

    const result = await response.json();
    const campaigner = result?.data?.campaginers;

    if (!campaigner) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.status(200).send(html);
      return;
    }

    const title = `${campaigner?.campaignId?.name || "ISKCON Gambiram"} | ${campaigner?.name}`;
    const description = `Join ${campaigner?.name} in supporting the construction of Sri Srinivasa Govinda Temple. Raised: ₹${Number(campaigner?.raisedAmount || 0).toLocaleString("en-IN")} | Goal: ₹${Number(campaigner?.targetAmount || 0).toLocaleString("en-IN")}. Donate today!`;
    const imageUrl =
      campaigner?.image?.url || `${frontendBaseUrl}/hkm_logo.svg`;
    const pageUrl = `${frontendBaseUrl}/${campaigner?.slug || slug}`;

    const htmlWithTitle = withUpdatedTitle(html, title);
    const htmlWithMeta = injectMetaTags(
      htmlWithTitle,
      buildMetaMarkup({
        title,
        description,
        imageUrl,
        url: pageUrl,
      }),
    );

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(htmlWithMeta);
  } catch {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
  }
}
