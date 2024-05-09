import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [impVal, setImpVal] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setImpVal((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, age, email, mobile, work, address, description } = impVal;

    const res = await axios.post("http://localhost:3000/register", {
      name,
      email,
      age,
      mobile,
      work,
      address,
      description,
    });
    console.log(res.data);
    if (res.status == 400 || !res.data) {
      alert("Error");
    } else {
      alert("data added");
      setImpVal({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        address: "",
        description: "",
      });
    }
  };

  return (
    <>
      <div className="container">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          Home
        </NavLink>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                onChange={setData}
                value={impVal.name}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={impVal.email}
                onChange={setData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                name="age"
                className="form-control"
                id="age"
                aria-describedby="emailHelp"
                value={impVal.age}
                onChange={setData}
              />
            </div>
            <div className="mb-3  col-lg-6 col-md-6 col-12">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="number"
                name="mobile"
                className="form-control"
                id="mobile"
                aria-describedby="emailHelp"
                value={impVal.mobile}
                onChange={setData}
              />
            </div>
            <div className="mb-3  col-lg-6 col-md-6 col-12">
              <label htmlFor="work" className="form-label">
                Work
              </label>
              <input
                type="text"
                name="work"
                className="form-control"
                id="work"
                aria-describedby="emailHelp"
                value={impVal.work}
                onChange={setData}
              />
            </div>
            <div className="mb-3  col-lg-6 col-md-6 col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="form-control"
                id="address"
                aria-describedby="emailHelp"
                value={impVal.address}
                onChange={setData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                className="form-control"
                cols="30"
                rows="5"
                id="description"
                value={impVal.description}
                onChange={setData}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
