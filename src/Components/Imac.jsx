const Imac = () => {
  return (
    <div className="imac">
      <div className="container">
        <div className="title">
          <h2>iMac</h2>
          <b>Say hello.</b>
          <p>Order 4.30 | Avalable second half of May</p>
          <span>
            <a href="#">
              Learn more {" "}
              <i className="fa fa-chevron-right" />
            </a>
            <a href="#">
              Watch the film <i className="fa fa-play-circle-o" />
            </a>
          </span>
        </div>
        <img src="/img/iMac.png" alt="iMac" />
      </div>
    </div>
  );
};

export default Imac;
