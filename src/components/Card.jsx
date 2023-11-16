import { tropical } from "../assets";

const Card = ({backgroundColor, btnColor, textColor, btnTextColor}) => {
  return (
    <div className={`container text-center my-4 ${backgroundColor} ${textColor} rounded`}>
      <div className="row row-cols-2">
        <div className="col">
          <img className="img-fluid" src={tropical}/>
        </div>
        <div className="col ">
          <div className="d-none d-sm-block"><p>jfnawjgb</p></div>
          <div>
          <button type="button" className={`${btnColor} ${btnTextColor} rounded col`}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
