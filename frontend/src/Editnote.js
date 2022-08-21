import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Editnote = () => {
  //   const { id } = useParams();
  const navigate = useNavigate();
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     const fun = async () => {
  //       const a = await axios.get(`http://localhost:9999/notes/allnotes/${id}`);
  //       setData(a);
  //       console.log(a);
  //     };
  //     fun();
  //   }, []);
  const { id, t, d, c, userid } = useParams();
  //   console.log(t);
  const [title, setTitle] = useState(t);
  const [description, setDescription] = useState(d);
  const [completed, setCompleted] = useState(c);
  const submithandler = async (e) => {
    e.preventDefault();
    if (completed === "true") {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
    const d = {
      title,
      description,
      completed,
      noteid: id,
    };
    const res = await axios.put("http://localhost:9999/notes/allnotes", d);
    navigate(`/notes/${userid}`);
    console.log(res);
  };
  return (
    <div>
      <div className="container mt-3">
        <h1 className="heading mt-3 mb-3">Edit note</h1>
        <div className="container">
          <form onSubmit={submithandler}>
            <div className="form-group mt-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Completed"
                value={completed}
                onChange={(e) => setCompleted(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editnote;
