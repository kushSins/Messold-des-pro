import "./App.css";
import Options from "./components/Options/Options";

const App = () => {
  const specs = [
    { index: 1, text: "6-oz. 100% organic cotton." },
    { index: 2, text: "Made from our burly rughy oxford." },
    { index: 3, text: "Our signature Jack button down cillar." },
    { index: 4, text: "Single rounded chest pocket." },
    { index: 5, text: "Double-needle felled construction throughout." },
    { index: 6, text: "Natural buttons." },
    { index: 7, text: "Lock-stiched buttons and buttonholes." },
    { index: 8, text: "Shorter length to be worn untucked." },
    { index: 9, text: "Tailored fit and high armhole." },
    { index: 10, text: "No pleats for easy ironing and clean lines" },
    { index: 11, text: "Wash cold and tumble dry low." },
    { index: 12, text: "Made in china" },
  ];

  const specItems = specs.map(({ text, index }) => <li key={index}>{text}</li>);
  return (
    <div className="App">
      <main className="container">
        <section className="sec">
          <div className="dis">
            <h4>DISCRIPTION</h4>
            <p className="gap para">
              There's one simple reason we call this our everyday oxford; we
              wear them pretty much every single day.
            </p>
          </div>
          <div className="mat heading">
            <h4>MATERIAL</h4>
            <p className="gap para">
              Just the right amout of sturdy for year round wear. Soft to the
              touch but built for a decade of solid wear. Oxford is pretty
              versatile fabric that looks just as good as it does pulled off the
              back of a chair. While traditional cotton uses 25 percent of the
              world's pesticides, our organic cotton doesn't use a drop. A
              better shirt, responsibally built for the long haul.
            </p>
          </div>
          <div className="wei heading">
            <h4>GARMENT WEIGHT</h4>
            <p className="gap para">
              Your daily driver. Burlier than the average
              <br /> boutton ups.
            </p>
            <div className="option">
              <Options />
            </div>
          </div>
        </section>
        <section className="sec">
          <h4 className="head-mob">SPECIFICATIONS</h4>
          <div className="gap para">
            <ul>
              {specItems}
              <li>Single rounded chest pocket.</li>
            </ul>
          </div>
        </section>
        <section className="sec">
          <h4 className="head-mob">ESSENTIALS</h4>
          <p className="gap para">
            This product is a Taylor Stich Essential that we aim to always keep
            in stock. Essentials are our tried and true products that we wear
            damn near everyday. If your size is currently out-of-stock, please
            sumbit your email adress in the "Notify Me" tab. We restock.
            Essentials regulary. In stock sizes are available for immediate
            shipping.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
