import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
        
      </html>
    );
  }
}

// <script async defer
// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDef-iJjhHH0ruDDbgXhPBqRXZ8QiJmwrw&callback=initMap">
// </script>