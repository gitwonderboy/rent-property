export default function FooterComponent() {
  const time = new Date();
  return (
    <>
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © {time.getFullYear()} Corner Properties Ltd. All rights reserved.
              <br />
              <a href="https://cornerproperties.co.za" target="_blank">
                Corner Properties
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
