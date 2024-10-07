import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          var button = document.querySelector('.mode-toggle-button');
          if (button) {
            button.classList.remove('mode-toggle-button-init');
          }
        })();
      `}} />
    </ThemeProvider>
  );
}

export default MyApp;