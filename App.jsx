import React from 'react'
const Header = React.lazy(() => import('./components/header/Header'));
const Nav = React.lazy(() => import('./components/nav/Nav'));
const About = React.lazy(() => import('./components/about/About'));
const Experience = React.lazy(() => import('./components/experience/Experience'));
const Portfolio = React.lazy(() => import('./components/portfolio/Portfolio'));
const Contact = React.lazy(() => import('./components/contact/Contact'));
const Footer = React.lazy(() => import('./components/footer/Footer'));
// Three.js Elements -->
const LegoCanvas = React.lazy(() => import('./components/LegoCanvas/LegoCanvas'));
const EarthCanvas = React.lazy(() => import('./components/EarthCanvas/EarthCanvas'));
const SateliteCanvas = React.lazy(() => import('./components/SateliteCanvas/SateliteCanvas'));
const NaveCanvas = React.lazy(() => import('./components/NaveCanvas/NaveCanvas'));



const App = () => {
  return (

    <>

      <React.Suspense fallback={<div>Loading Lego Canvas...</div>}>
        <LegoCanvas />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading Earth Canvas...</div>}>
        <EarthCanvas />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading Satelite Canvas...</div>}>
        <SateliteCanvas />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading Nave Canvas...</div>}>
        <NaveCanvas />
      </React.Suspense>


      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />

      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <About />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Portfolio />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </React.Suspense>




    </>
  );
}

export default App