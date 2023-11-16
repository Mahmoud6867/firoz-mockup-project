import { firoz, heroImg, menu, upDown } from "../assets";


const Hero = () => {
  return (
    <div className="bgSecondary rounded-5 w-full p-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 my-4">
            <div className="h-25">
              <img className="img-fluid" src={firoz} alt="firoz" />
            </div>
            <div>
              <p className="fs-2 fw-semibold">
                Firoz is a specialized company in analyzing that is used for
              </p>
              <p>
                supplying and installing of commercial equipment supplying and
                installing of com equipment supplying and
              </p>
            </div>
            <div className="d-grid gap-2 d-md-block">
              <button className="bgMain rounded text-light col-6" type="button">
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-sm-6 my-4 position-relative">
            <img
              className="img-fluid"
              src={heroImg}
              alt="factory image"
            />
            <div className="position-absolute top-0 end-0 my-sm-4 mx-lg-5 my-1 mx-4">
              <img className="img-fluid" src={menu} alt="menu"/>
            </div>
            <div className="position-absolute col-10 bottom-0 start-50 translate-middle-x ">
              <div className="bg-light rounded-pill my-4 p-2 d-flex justify-content-between ">
              <div className="text-center fw-semibold">Heating Solutions</div>
              <div className="bgMain rounded-circle"><img className="img-fluid" src={upDown} alt="upDown"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
