import {
  background,
  afterSale,
  Consultation,
  fabrication,
  supply,
} from "../assets";

const Services = () => {
  return (
    <div className="bgSecondary rounded-5 w-full p-2">
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-6 my-4">
            <p className="fw-semibold display-5">Services</p>
          </div>
          <div className="col-sm-6 my-4 ">
            <img className="img-fluid" src={background} alt="background" />
          </div>
        </div>

        <div className="col-12 position-absolute top-50 start-50 translate-middle d-block d-sm-none">
          <div className="container text-center">
            <div className="row row-cols-2">
              <div className="col">
                <div className="p-2">
                  <img className="img-fluid" src={Consultation} alt="images" />
                </div>
              </div>
              <div className="col">
                <div className="p-2">
                  <img className="img-fluid" src={afterSale} alt="images" />
                </div>
              </div>
              <div className="col">
                <div className="p-2">
                  <img className="img-fluid" src={supply} alt="images" />
                </div>
              </div>
              <div className="col">
                <div className="p-2">
                  <img className="img-fluid" src={fabrication} alt="images" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 position-absolute top-50 start-50 translate-middle d-none d-sm-block">
          <div className="container text-center">
            <div className="row row-cols-4">
              <div className="col">
                <div className="d-flex flex-column mb-3">
                  <div className="p-2">
                    <p className="fs-5 fw-semibold">Consultation & Design</p>
                  </div>
                  <div className="p-2">
                    <img
                      className="img-fluid"
                      src={Consultation}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column mb-3">
                  <div className="p-2">
                    <p className="fs-5 fw-semibold">After Sale Services</p>
                  </div>
                  <div className="p-2">
                    <img className="img-fluid" src={afterSale} alt="images" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column mb-3">
                  <div className="p-2">
                    <p className="fs-5 fw-semibold">Supply & Install</p>
                  </div>
                  <div className="p-2">
                    <img className="img-fluid" src={supply} alt="images" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column mb-3">
                  <div className="p-2">
                    <p className="fs-5 fw-semibold">Custom Fabrication</p>
                  </div>
                  <div className="p-2">
                    <img className="img-fluid" src={fabrication} alt="images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
