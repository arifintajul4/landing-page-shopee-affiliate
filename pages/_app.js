import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
