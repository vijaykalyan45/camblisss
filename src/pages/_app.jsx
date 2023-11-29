if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { store } from '../redux/store';
import { Provider } from "react-redux";
import '../styles/index.scss'
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import AppProvider from '../context/AppContext';
import { persistStore } from "redux-persist";
import SEO from '@components/seo';
import Preloader from '@components/preloader';

let persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SEO font={'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap'} />
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
        <AppProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </AppProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
