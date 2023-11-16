import { background } from "../assets";
import Card from "./Card";

const Knowledge = () => {
  return (
    <div className="bgSecondary rounded-5 w-full p-2 my-2">
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-6 my-4">
            <p className="fw-semibold display-5">Knowledge Hub </p>
          </div>
          <div className="col-sm-6 my-4 ">
            <img className="img-fluid" src={background} alt="background" />
          </div>
        </div>
        
        <div className="position-absolute top-50 start-50 translate-middle col-12 d-block d-sm-none">
          <div className="container text-center">
            <div className="row row-cols-2">
              <div className="col">
                <Card
                  btnColor="bgSecondary"
                  backgroundColor="bgMain"
                  textColor="textSecondary"
                  btnTextColor="textMain"
                />
              </div>
              <div className="col">
                <Card
                  btnColor="bgMain"
                  backgroundColor="bgContact"
                  textColor="textMain"
                  btnTextColor="textSecondary"
                />
              </div>
              <div className="col">
                <Card
                  btnColor="bgMain"
                  backgroundColor="bgContact"
                  textColor="textMain"
                  btnTextColor="textSecondary"
                />
              </div>
              <div className="col">
                <Card
                  btnColor="bgSecondary"
                  backgroundColor="bgMain"
                  textColor="textSecondary"
                  btnTextColor="textMain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute top-50 start-50 translate-middle col-12 d-none d-sm-block">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <Card
                  btnColor="bgSecondary"
                  backgroundColor="bgMain"
                  textColor="textSecondary"
                  btnTextColor="textMain"
                />
              </div>
              <div className="col">
                <Card
                  btnColor="bgSecondary"
                  backgroundColor="bgMain"
                  textColor="textSecondary"
                  btnTextColor="textMain"
                />
              </div>
              <div className="col">
                <Card
                  btnColor="bgMain"
                  backgroundColor="bgContact"
                  textColor="textMain"
                  btnTextColor="textSecondary"
                />
              </div>
              <div className="col">
                <Card
                  btnColor="bgMain"
                  backgroundColor="bgContact"
                  textColor="textMain"
                  btnTextColor="textSecondary"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card
                  btnColor="bgMain"
                  backgroundColor="bgContact"
                  textColor="textMain"
                  btnTextColor="textSecondary"
                />
              </div>
              <div className="col">
                <Card
                  btnColor="bgMain"
                  backgroundColor="bgContact"
                  textColor="textMain"
                  btnTextColor="textSecondary"
                />
              </div>
              <div className="col">
                <Card
                  btnColor="bgSecondary"
                  backgroundColor="bgMain"
                  textColor="textSecondary"
                  btnTextColor="textMain"
                />
              </div>
              <div className="col">
                <Card
                  btnColor="bgSecondary"
                  backgroundColor="bgMain"
                  textColor="textSecondary"
                  btnTextColor="textMain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
