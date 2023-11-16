import { Ellipse, gate } from "../assets";

const Certificates = () => {
  return (
    <div className="bgSecondary rounded-5 w-full p-2 my-2">
      <div className="container">
        <div className="row gx-5">
          <div className="col-sm-6 my-4">
            <div><p className="fw-semibold display-5">Certificates</p></div>
            <div className="border-start border-primary my-5 px-4 position-relative">
            <div className="position-absolute  start-0 translate-middle">
              <img className="img-fluid" alt="Ellipse" src={Ellipse}/>
            </div>
            <p className="fw-semibold">
              Firoz is a specialized company for studying , Designing, supplying
              and installing of commercial equipment that is used in :
            </p>
            <p>Kitchens, Laundry, Freezers & Refrigerator Heating Solutions</p>
            <p>
              Firoz’s wealth of experience, technical capability and partners
              can provide the market with equipment that not only offers ideal
              solution to today’s high standard of requirements along with
              consistently good results , but does so whilst retaining the very
              best in quality.
            </p>
            </div>
          </div>

          <div className="col-sm-6 my-4">
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <img className="img-fluid" src={gate} alt="gate" />
                </div>
                <div className="col">
                  <img className="img-fluid" src={gate} alt="gate" />
                </div>
                <div className="col">
                  <img className="img-fluid" src={gate} alt="gate" />
                </div>
                <div className="col">
                  <img className="img-fluid" src={gate} alt="gate" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
