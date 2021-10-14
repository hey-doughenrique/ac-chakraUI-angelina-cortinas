import Document, { Html, Head, Main, NextScript } from 'next/document'

import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Frank+Ruhl+Libre&display=swap" rel="stylesheet"
          />
          <meta name="theme-color" content="#152B47" />

          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K7JQZHG');`,
          }}>
          </script>

        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7JQZHG"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></iframe>`,
          }}
          />
          <Script src="https://cdn.jsdelivr.net/gh/gkogan/sup-save-url-parameters/sup.min.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}