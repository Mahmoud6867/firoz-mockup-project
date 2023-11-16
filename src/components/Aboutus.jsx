import { clientsFloat, presentation } from "../assets";

const Aboutus = () => {
  return (
    <div className="bgSecondary rounded-5 w-full p-2 my-2">
      <div className="container">
        <div className="row gx-5">
          <div className="col-sm-6 my-4">
            <p className="fw-semibold display-5">About Us</p>
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
            <div className="d-grid gap-2 d-md-block">
              <button className="bgMain rounded text-light col-6" type="button">
                Read More
              </button>
            </div>
          </div>

          <div className="col-sm-6 my-4 position-relative">
            <div>
              <img
                className="img-fluid"
                src={presentation}
              />
            </div>
            <div className="position-absolute top-100 start-0 translate-middle w-50 pb-5 ps-5">
              <img className="img-fluid" src={clientsFloat} alt="clientsFloat"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
