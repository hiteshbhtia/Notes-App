import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const CreateNote = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getNotes();
  }, [data.length]);
  let { id } = useParams();
  const getNotes = async () => {
    const a = await axios.get(`http://localhost:9999/users/${id}`);
    console.log(id);
    setdata(a.data);

    // console.log(a.data.notes);
  };

  console.log(data);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  // const [title,setTitle]=useState("");
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
    };
    data.notes.push(d);
    console.log(data);

    const a = await axios.post("http://localhost:9999/users", data);
    console.log(a.data);
    navigate(`/notes/${id}`);
  };
  return (
    <div>
      <div className="container mt-3">
        <h1 className="heading mt-3 mb-3">Create New Note</h1>
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

export default CreateNote;
