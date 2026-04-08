export default function handler(req, res) {
  const { bannerId, dealId } = req.query;
  let deepLink = "";
  if (bannerId) {
    deepLink = `dealzup://banner/${bannerId}`;
  } else if (dealId) {
    deepLink = `dealzup://deal/${dealId}`;
  }
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
