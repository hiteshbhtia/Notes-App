import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const Notes = () => {
  useEffect(() => {
    getNotes();
  }, []);
  let { id } = useParams();
  const [data, setdata] = useState([]);
  const getNotes = async () => {
    const a = await axios.get(`http://localhost:9999/users/${id}`);
    setdata(a.data.notes);

    // console.log(a.data.notes);
  };

  console.log(data);
  const navigate = useNavigate();
  const deletehandler = async (noteid) => {
    const a = await axios.delete(
      `http://localhost:9999/notes/allnotes/${noteid}`
    );
    getNotes();
  };
  const edithandler = (noteid, title, description, completed, userid) => {
    navigate(
      `/editnote/${noteid}/${title}/${description}/${completed}/${userid}`
    );
  };
  return (
    <div className="container mt-4 ">
      <h3 className="mt-3 mb-3">Your Notes</h3>

      <button
        className="btn btn-dark  mb-3"
        onClick={() => {
          navigate(`/createnote/${id}`);
        }}
      >
        Add Note
      </button>

      <div className="row">
        {data.map((note, index) => {
          return (
            <div key={index} className="col-4 mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.description}</p>
                  <p className="card-text">Completed:{note.completed + ""}</p>

                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => {
                      edithandler(
                        note.noteid,
                        note.title,
                        note.description,
                        note.completed,
                        id
                      );
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deletehandler(note.noteid);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
