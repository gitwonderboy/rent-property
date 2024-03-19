import TopBarComponent from './components/TopBarComponent';
import NavBarComponent from './components/NavBarComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import PropertyComponent from './components/PropertyComponent';
export default function Property() {
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
      <TopBarComponent />
      <NavBarComponent />
      <HeaderComponent pageTitle="Properties" page="Properties" />
      <div className="section properties">
        <div className="container">
          <ul className="properties-filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">
                Show All
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".adv">
                Apartment
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".str">
                Villa House
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".rac">
                Penthouse
              </a>
            </li>
          </ul>
          <div className="row properties-box">
            {properties.map((property) => (
              <div className="col-lg-4 col-md-6 align-self-center mb-30 col-md-6">
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
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination">
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a className="is_active" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
