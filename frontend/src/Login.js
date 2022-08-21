import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  //   const [fname, setFname] = useState("");
  //   const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/users/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.firstname != null) {
          localStorage.setItem("id", response.data.userid);

          navigate(`notes/${response.data.userid}`);
        } else {
          navigate(`/`);
        }
        console.log(response.data.userid);
        console.log(response.data.firstname);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container mt-3">
      <h1 className="heading mt-3 mb-3">Login</h1>
      <div className="container">
        <form onSubmit={submithandler}>
          <div className="form-group mt-3 mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3 mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark mb-3">
            Submit
          </button>
        </form>
        <h4>OR</h4>
        <div className="mt-3">
          <button className="btn btn-dark" onClick={() => navigate("/signup")}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
