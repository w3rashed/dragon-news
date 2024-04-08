import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className=" space-y-4">
      <div className="space-y-3">
        <h2 className="font-semibold text-xl">Login With</h2>
        <button className="btn w-full">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn w-full">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>
      <div className="space-y-3">
        <h2 className="font-semibold text-xl">Find Us On</h2>
        <div className="border rounded-lg">
          <Link className=" border-b flex gap-2 items-center p-4 w-full">
            <FaFacebook></FaFacebook>
            <span>Facebook</span>
          </Link>
          <Link className="border-b flex gap-2 items-center p-4 w-full">
            <FaTwitter></FaTwitter>
            Twitter
          </Link>
          <Link className=" flex gap-2 items-center p-4 w-full">
            <FaInstagram></FaInstagram>
            Instagram
          </Link>
        </div>
      </div>
      {/* q-zone */}
      <div className="space-y-3 bg-slate-100 p-2 py-2">
        <h2 className="font-semibold text-xl">Q-Zone</h2>
        <div className="grid gap-4">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
