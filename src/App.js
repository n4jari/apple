import {
  Footer,
  Header,
  Imac,
  Ipad,
  Iphone,
  Navbar,
  OtherProduct,
} from "./Components/";
import {
  AirTagItems,
  AppleTVItems,
  AppleWatchItems,
  EnvironmentItems,
} from "./Components/OtherProductItems";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Ipad />
      <Imac />
      <Iphone />
      <OtherProduct
        h2={AirTagItems.h2}
        b={AirTagItems.b}
        link1={AirTagItems.a1}
        link2={AirTagItems.a2}
        img={AirTagItems.img}
        cName={AirTagItems.cName}
      />

      <OtherProduct
        h2={EnvironmentItems.h2}
        b={EnvironmentItems.b}
        link1={EnvironmentItems.a1}
        link2={EnvironmentItems.a2}
        img={EnvironmentItems.img}
        cName={EnvironmentItems.cName}
      />

      <OtherProduct
        h2={AppleWatchItems.h2}
        b={AppleWatchItems.b}
        p={AppleWatchItems.p}
        link1={AppleWatchItems.a1}
        link2={AppleWatchItems.a2}
        img={AppleWatchItems.img}
        cName={AppleWatchItems.cName}
      />

      <OtherProduct
        h2={AppleTVItems.h2}
        b={AppleTVItems.b}
        link1={AppleTVItems.a1}
        link2={AppleTVItems.a2}
        img={AppleTVItems.img}
        cName={AppleTVItems.cName}
      />
      <Footer />
    </>
  );
};

export default App;
