import SocialSidebar from './components/SocialSidebar';
import SiteHeader from './components/SiteHeader';
import SiteTop from './components/SiteTop';
import Routes from './routes';
import BackToTopButton from './components/BackToTopButton';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <SocialSidebar />
      <SiteHeader />
      <SiteTop />
      <Routes />
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;
