import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the log in pare", location);

  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate after log in
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-8 ">
        <h2 className="font-semibold text-4xl text-center my-5">
          Login your account
        </h2>
        <div className="border-b md:w-3/4 lg:w-1/2 mx-auto my-6"></div>
        <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Dont have an account{" "}
          <Link
            className="hover:border-b-2 hover:border-b-red-500 text-red-500 font-bold"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
