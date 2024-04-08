import { Link } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name, photo);

    // create user
    createUser( email, password)
      .then((result) => {
        console.log(result.user);
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
          Register your account
        </h2>
        <div className="border-b md:w-3/4 lg:w-1/2 mx-auto my-6"></div>
        <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your email address"
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
              placeholder="Enter Your password"
              className="input input-bordered"
              required
            />
            <div>
              <input
                className="mt-4 "
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label className=" ml-2">
                <span>Accept Term & Conditions</span>
              </label>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center my-4">
          Already have an account{" "}
          <Link
            className="hover:border-b-2 hover:border-b-red-500 text-red-500 font-bold"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
