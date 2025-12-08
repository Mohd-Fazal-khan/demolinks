export default function handler(req, res) {
  const { flyerId, productId } = req.query;

  const deepLink = `demo://flyer/${flyerId}/${productId}`;
  const playStore = "https://play.google.com/store/apps/details?id=com.demolink";

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
