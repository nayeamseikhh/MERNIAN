import navicons01 from "../../../assets/NavIcons/navicon01.png";
import navicons02 from "../../../assets/NavIcons/navicon02.png";
import navicons03 from "../../../assets/NavIcons/navicon03.png";
import navicons04 from "../../../assets/NavIcons/navicon04.png";
import navractangle from "../../../assets/NavIcons/navractangle.png";

const IconsRightPart = () => {
  return (
    <>
      <div>
        <div className="flex text-white justify-between pb-1">
          <p>Next</p>
          <p>35 EXP</p>
        </div>
        <div>
          <img src={navractangle} alt="" />
        </div>
      </div>
      <span className="w-[1px] h-8 bg-purple04"></span>
      <div>
        <img className="h-6" src={navicons04} alt="navicon" />
      </div>
      <div>
        <img className="h-6" src={navicons03} alt="navicon" />
      </div>
      <div>
        <img className="h-6" src={navicons02} alt="navicon" />
      </div>
      <span className="w-[1px] h-8 bg-purple04"></span>
      <div>
        <img className="h-6" src={navicons01} alt="setting-icon" />
      </div>
    </>
  );
};

export default IconsRightPart;
