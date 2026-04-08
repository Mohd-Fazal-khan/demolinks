export default function handler(req, res) {
  const { bannerId } = req.query;

  const deepLink = `dealzup://banner/${bannerId}`;
  const playStore = "https://play.google.com/store/apps/details?id=com.dealzupuser";

  res.setHeader("Content-Type", "text/html");

  res.end(`
    <html>
      <head><meta http-equiv="refresh" content="0; url=${deepLink}" /></head>
      <body>
        <script>
          window.location = "${deepLink}";
          setTimeout(() => { window.location = "${playStore}"; }, 800);
        </script>
      </body>
    </html>
  `);
}
