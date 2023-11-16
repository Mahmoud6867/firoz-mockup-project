import { bottomRightCorner, kitchen, plus, topLeftCorner } from "../assets";

const Fields = () => {
  return (
    <div className="bgSecondary rounded-5 w-full p-2 my-2">
      <div className="container">
        <div className="row gx-5">
          <div className="col-sm-6 my-4">
            <p className="fw-semibold display-5">Fields</p>

            <ul className="list-group-flush">
              <li className="list-group-item border-bottom fs-4 my-5 fw-semibold">
                <div className="d-flex justify-content-start">
                  <div><img className="img-fluid" src={plus} alt="plus"/></div>
                  <div>
                    <p>Kitchens</p>
                  </div>
                </div>
              </li>
              <li className="list-group-item border-bottom fs-4 my-5 fw-semibold">
                <div className="d-flex justify-content-start">
                  <div><img className="img-fluid" src={plus} alt="plus"/></div>
                  <div>
                    <p>Laundry</p>
                  </div>
                </div>
              </li>
              <li className="list-group-item fw-semibold fs-4 my-5 border-bottom">
                <div className="d-flex justify-content-start">
                  <div><img className="img-fluid" src={plus} alt="plus"/></div>
                  <div>
                    <p>Heating Solutions</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 my-4 py-4 position-relative">
            <img className="img-fluid" src={kitchen} alt="kitchen" />
            <div className="position-absolute top-0 start-0">
              <img className="img-fluid" src={topLeftCorner} alt="topLeftCorner"/>
            </div>
            <div className="position-absolute bottom-0 end-0">
            <img className="img-fluid" src={bottomRightCorner} alt="bottomRightCorner"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fields;
