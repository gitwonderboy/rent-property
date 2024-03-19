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
    {
      src: '/src/assets/images/property-02.jpg',
      homeType: 'Luxury Villa',
      price: 'R 750.00',
      title: 'UMzinto',
      bedrooms: '2',
      bathrooms: '1',
      area: '500m',
      floor: '2',
      parking: '2',
    },
    {
      src: '/src/assets/images/property-03.jpg',
      homeType: 'Luxury Villa',
      price: 'R 950.00',
      title: 'Amandawe',
      bedrooms: '3',
      bathrooms: '2',
      area: '542m',
      floor: '3',
      parking: '2',
    },
    {
      src: '/src/assets/images/property-04.jpg',
      homeType: 'Luxury Villa',
      price: 'R 850.00',
      title: 'Mgababa',
      bedrooms: '3',
      bathrooms: '2',
      area: '542m',
      floor: '2',
      parking: '2',
    },
    {
      src: '/src/assets/images/property-06.jpg',
      homeType: 'Luxury Villa',
      price: 'R 850.00',
      title: 'Scottburgh',
      bedrooms: '2',
      bathrooms: '2',
      area: '402m',
      floor: '2',
      parking: '1',
    },
    {
      src: '/src/assets/images/property-05.jpg',
      homeType: 'Luxury Villa',
      price: 'R 550.00',
      title: 'Umkomaas',
      bedrooms: '1',
      bathrooms: '1',
      area: '400m',
      floor: '1',
      parking: '0',
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
            {properties.map((property) => (
              <PropertyComponent
                src={property.src}
                homeType={property.homeType}
                price={property.price}
                title={property.title}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                floor={property.floor}
                parking={property.parking}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
