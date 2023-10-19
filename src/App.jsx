const App = () => {
    return <div>
    <Cursor/>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'>
      <Parallax type="services"/>
    </section>
    <section>Technologies</section>
    <section id='Portfolio'>
      <Parallax type="portfolio"/>
    </section>
    <Portfolio/>
    <section id='Contact'>
      <Contact/>
    </section>
  </div>;
};

export default App;
