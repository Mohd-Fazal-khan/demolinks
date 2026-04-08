export default function handler(req, res) {
  const { dealId } = req.query;

  const deepLink = `dealzup://deal/${dealId}`;
  const playStore = "https://play.google.com/store/apps/details?id=com.dealzupuser";

  res.setHeader("Content-Type", "text/html");

  res.end(`
    <html>
      <head><meta http-equiv="refresh" content="0; url=${deepLink}" /></head>
      <body>
        <script>
          window.location = "${deepLink}";
          setTimeout(() => { window.location = "${playStore}"; }, 1200);
        </script>
      </body>
    </html>
  `);
}
