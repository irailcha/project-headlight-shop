import fs from "fs";
import axios from "axios";

const baseUrl = "https://avtogalogen.com.ua";
const staticPages = [
  "/",
  "/about",
  "/store",
  "/helper",
  "/reviews",
  "/galogen",
  "/xenon",
  "/led",
  "/laser",
  "/headlight",
  "/backlight",
  "/foglight",
];

const generateSitemap = async () => {
  try {
    const res = await axios.get("https://backend-headlight-shop.vercel.app/api/adverts");
    const adverts = res.data
      .filter((p) => p.id)
      .map((p) => `/store/${p.id}`);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    [...staticPages, ...adverts].forEach((url) => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}${url}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    // Створюємо dist, якщо ще нема
    if (!fs.existsSync("./dist")) {
      fs.mkdirSync("./dist");
    }

    fs.writeFileSync("./dist/sitemap.xml", xml, "utf8");
    console.log("✅ sitemap.xml згенеровано у dist!");
  } catch (err) {
    console.error("❌ Помилка при генерації sitemap:", err);
  }
};

generateSitemap();
