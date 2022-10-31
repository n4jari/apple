const Iphone = () => {
  return (
    <div className="iphone">
      <div className="container">
        <div className="title">
          <h2>iPhone 12</h2>
          <b>Purple. Now in season.</b>
          <p>
            From $29.12/mo. for 24 mo. or $699 before trade‑in1 Buy directly
            from apple with special carrier offers
          </p>
          <span>
            <a href="#">
              Learn more {" "}
              <i className="fa fa-chevron-right" />
            </a>
            <a href="#">
              Buy <i className="fa fa-play-circle-o" />
            </a>
          </span>
        </div>
        <img src="/img/iPhone12.png" alt="iPhone12" />
      </div>
    </div>
  );
};

export default Iphone;
