import logo from "../../assets/logo.png";
// var moment = require('moment');
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-lg">Journalism Without Fear or Favour</p>
      {/* <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p> */}
      <p>{moment().format("dddd, MMMM , D ,YYYY")}</p>
    </div>
  );
};

export default Header;
