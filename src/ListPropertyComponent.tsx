import PropertyComponent from './PropertyComponent';
export default function ListPropertyComponent() {
  const properties = [
    {
      src: '/src/assets/images/property-01.jpg',
      homeType: 'Luxury Villa',
      price: 'R 950.00',
      title: 'Scottburgh',
      bedrooms: '3',
      bathrooms: '2',
      area: '542m',
      floor: '3',
      parking: '2',
    },
  ];
  return (
    <>
      <div className="properties section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Properties</h6>
                <h2>We Provide The Best Property You Like</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <PropertyComponent
              src="/src/assets/images/property-01.jpg"
              homeType="Luxury Villa"
              price="R 950.00"
              title="Scottburgh"
              bedrooms="8"
              bathrooms="4"
              area="542m"
              floor="3"
              parking="2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
