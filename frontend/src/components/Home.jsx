import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [userData, setUserdata] = useState([]);
  const getAllUsers = async () => {
    const res = await axios.get("http://localhost:3000/getallusers");
    console.log(res.data);
    if (res.status === 200) {
      setUserdata(res.data);
    } else {
      alert("error");
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUser = async (id) => {
    const res2 = await axios.delete(`http://localhost:3000/delete/${id}`);
    console.log(res2);
    if (res2.status === 200) {
      alert("delete");
      getAllUsers();
    }
  };
  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className="mt-2 mb-2" style={{ textAlign: "right" }}>
            <NavLink to={"/register"} className="btn btn-primary">
              Add Data
            </NavLink>
          </div>
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">AGE</th>
                <th scope="col">MOBILE NO</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">WORK</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((ele, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>

                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>{ele.age}</td>
                      <td>{ele.mobile}</td>
                      <td>{ele.address}</td>
                      <td>{ele.work}</td>
                      <td>{ele.description}</td>
                      <td className="d-flex justify-content-between">
                        <NavLink to={`view/${ele._id}`}>
                          <button className="btn btn-success">
                            <i className="fa-solid fa-eye"></i>
                          </button>
                        </NavLink>
                        <NavLink to={`edit/${ele._id}`}>
                          <button className="btn btn-primary">
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>
                        </NavLink>
                        <button
                          onClick={() => {
                            deleteUser(ele._id);
                          }}
                          className="btn btn-warning"
                        >
                          <i className="fas-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
