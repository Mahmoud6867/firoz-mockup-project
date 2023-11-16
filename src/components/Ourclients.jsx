import {
  ourclients,
  phone,
  location,
  mail,
  facebook,
  youtube,
  instgram,
} from "../assets";

const Ourclients = () => {
  return (
    <div className="bgSecondary rounded-5 w-full p-2 my-2">
      <div className="container">
        <div className="row gx-5">
          <div className="col-sm-6 my-4">
            <p className="fw-semibold display-5">Our Clients</p>
            <div>
              <img
                className="rounded-circle img-fluid"
                src={ourclients}
                alt="ourclients"
              />
            </div>
          </div>

          <div className="col-sm-6 my-4 bgContact rounded-5">
            <p className="fw-semibold display-5">Contact Us</p>

            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="name"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  aria-label="email"
                />
              </div>
            </div>

            <div className="row my-2">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Services"
                  aria-label="services"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  aria-label="phone"
                />
              </div>
            </div>

            <div className="row my-2">
              <div className="col">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  aria-label="services"
                />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="button" className="bgMain rounded text-light col-4">
                Send
              </button>
            </div>

            <div className="container text-center my-5">
              <div className="row">
                <div className="col">
                  <div>
                    <img className="img-fluid" alt="location" src={location} />
                    <p className="fw-semibold">Address:</p>
                  </div>
                  <div>
                    <p>33 Ahmed Abul Ela St., Nasr City, Cairo , Egypt</p>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img className="img-fluid" alt="phone" src={phone} />
                    <p className="fw-semibold">Tel.No:</p>
                  </div>
                  <div>
                    <p>+202 22728689 / 02 22748419 / 02 22745896</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    <img className="img-fluid" alt="mail" src={mail} />
                    <p className="fw-semibold">Email:</p>
                  </div>
                  <div>
                    <p>firoz@al-firoz.com</p>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <p className="fw-semibold">Social Media:</p>
                  </div>
                  <div>
                    <div className="container text-center">
                      <div className="row">
                        <div className="col"><img className="img-fluid" alt="facebook" src={facebook} /></div>
                        <div className="col"><img className="img-fluid" alt="youtube" src={youtube} /></div>
                        <div className="col"><img className="img-fluid" alt="instgram" src={instgram} /></div>
                      </div>
                    </div>
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

export default Ourclients;
