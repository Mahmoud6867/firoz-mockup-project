import { facebook, instgram, location, mail, phone, youtube } from "../assets";

const Footer = () => {
  return (
    <div className="text-light rounded-5 w-full p-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 my-4 border-end">
            <div className="d-flex flex-column mb-3">
              <div className="p-2 d-flex justify-content-start">
                <div>
                  <img className="img-fluid me-4" src={mail} alt="mail" />
                </div>
                <div>
                  <p className="fw-semibold">Email:</p>
                  <p>firoz@al-firoz.com</p>
                </div>
              </div>

              <div className="p-2 d-flex justify-content-start">
                <div>
                  <img className="img-fluid me-4" src={phone} alt="mail" />
                </div>
                <div>
                  <p className="fw-semibold">Tel.No</p>
                  <p>+202 22728689 / 02 22748419 / 02 22745896</p>
                </div>
              </div>

              <div className="p-2 d-flex justify-content-start">
                <div>
                  <img className="img-fluid me-4" src={location} alt="mail" />
                </div>
                <div>
                  <p className="fw-semibold">Address:</p>
                  <p>33 Ahmed Abul Ela St., Nasr City, Cairo , Egypt</p>
                </div>
              </div>

              <div className="p-2">
                <div>
                  <p className="fw-semibold">Social Media:</p>
                  <div className="d-flex justify-content-center">
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        alt="facebook"
                        src={facebook}
                      />
                    </div>
                    <div className="col-2">
                      <img className="img-fluid" alt="youtube" src={youtube} />
                    </div>
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        alt="instgram"
                        src={instgram}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 my-4">
            <div className="container text-center">
              <div className="row row-cols-2">
                <div className="col fw-semibold fs-4 p-3">Home</div>
                <div className="col fw-semibold fs-4 p-3">Gallery</div>
                <div className="col fw-semibold fs-4 p-3">About Us</div>
                <div className="col fw-semibold fs-4 p-3">Events</div>
                <div className="col fw-semibold fs-4 p-3">Fields</div>
                <div className="col fw-semibold fs-4 p-3">Projects</div>
                <div className="col fw-semibold fs-4 p-3">Services</div>
                <div className="col fw-semibold fs-4 p-3">Partners</div>
                <div className="col fw-semibold fs-4 p-3">Knowledge Hub</div>
                <div className="col fw-semibold fs-4 p-3">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
