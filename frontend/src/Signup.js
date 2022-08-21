import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submithandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/users", {
        firstname: fname,
        lastname: lname,
        email: email,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("id", response.data.userid);
        navigate(`/notes/${response.data.userid}`);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container mt-4">
      <h1 className="heading mb-5">Signup</h1>
      <div className="container">
        <form onSubmit={submithandler}>
          <div className="form-group mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputfname"
              placeholder="Enter firstname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="form-group mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputlname"
              placeholder="Enter Lastname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="form-group mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3 mt-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
