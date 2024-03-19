export default function PropertyComponent(props) {
  return (
    <>
      <div className="item">
        <a href="property-details.html">
          <img src={props.src} alt="" />
        </a>
        <span className="category">{props.homeType}</span>
        <h6>{props.price}</h6>
        <h4>
          <a href="property-details.html">{props.title}</a>
        </h4>
        <ul>
          <li>
            Bedrooms: <span>{props.bedrooms}</span>
          </li>
          <li>
            Bathrooms: <span>{props.bathrooms}</span>
          </li>
          <li>
            Area: <span>{props.area}</span>
          </li>
          <li>
            Floor: <span>{props.floor}</span>
          </li>
          <li>
            Parking: <span>{props.parking}</span>
          </li>
        </ul>
        <div className="main-button">
          <a href="property-details.html">Schedule a visit</a>
        </div>
      </div>
    </>
  );
}
