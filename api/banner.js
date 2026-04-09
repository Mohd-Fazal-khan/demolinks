// export default function handler(req, res) {
//   const { bannerId } = req.query;

//   const deepLink = `dealzup://banner/${bannerId}`;
//   const playStore = "https://play.google.com/store/apps/details?id=com.dealzupuser";

//   res.setHeader("Content-Type", "text/html");

//   res.end(`
//     <html>
//       <head><meta http-equiv="refresh" content="0; url=${deepLink}" /></head>
//       <body>
//         <script>
//           window.location = "${deepLink}";
//           setTimeout(() => { window.location = "${playStore}"; }, 800);
//         </script>
//       </body>
//     </html>
//   `);
// }
export default function handler(req, res) {
  const { bannerId } = req.query;

  const deepLink = `dealzup://banner/${bannerId}`;

  const playStore =
    "https://play.google.com/store/apps/details?id=com.dealzupuser";

  const appStore =
    "https://apps.apple.com/in/app/dealzup-user/id6745420923";

  res.setHeader("Content-Type", "text/html");

  res.end(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Opening DealzUp...</title>
      </head>
      <body style="text-align:center; padding-top:50px; font-family:sans-serif;">
        <h2>Opening DealzUp...</h2>

        <script>
          const userAgent = navigator.userAgent || navigator.vendor || window.opera;

          const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
          const isAndroid = /android/i.test(userAgent);

          // Try opening app
          window.location = "${deepLink}";

          setTimeout(() => {
            if (isIOS) {
              window.location = "${appStore}";
            } else if (isAndroid) {
              window.location = "${playStore}";
            } else {
              window.location = "https://www.dealzup.ca";
            }
          }, 1200);
        </script>

        <p>If not redirected, use below:</p>

        <a href="${deepLink}" style="display:inline-block; margin:10px; padding:10px 20px; background:#000; color:#fff; text-decoration:none; border-radius:5px;">
          Open App
        </a>

        <br/>

        <a href="${appStore}" style="display:inline-block; margin:10px; color:blue;">
          Download on App Store
        </a>

        <br/>

        <a href="${playStore}" style="display:inline-block; margin:10px; color:green;">
          Get it on Play Store
        </a>

      </body>
    </html>
  `);
}
