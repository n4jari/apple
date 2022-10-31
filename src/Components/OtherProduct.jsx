const OtherProduct = ({ h2, b, p, link1, link2, img, cName }) => {
  return (
    <div className={cName}>
      <div className="container">
        <div className="title">
          <h2>{h2}</h2>
          <b>{b}</b>
          <p>{p}</p>
          <span>
            <a href="#">
              {link1} <i className="fa fa-play-circle-o" />
            </a>
            <a href="#">
              {link2} <i className="fa fa-chevron-right" />
            </a>
          </span>
        </div>
        <img src={img} alt={h2} />
      </div>
    </div>
  );
};

export default OtherProduct;
