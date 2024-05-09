import CreateIcon from "@mui/icons-material/Create";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams("");
  const [data, setData] = useState([]);
  const getUser = async () => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(res.data);
    if (res.status === 200) {
      setData(res.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <h1>Welcome {data.name}</h1>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <div className="row">
              <div className="left_view col-lg-6 col-md-6 col-12">
                <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                <h3 className="mt-3">
                  Name : <span>{data.name}</span>
                </h3>
                <h3 className="mt-3">
                  Age : <span>{data.age}</span>
                </h3>
                <p className="mt-3">
                  <MailOutlineIcon /> Email: <span>{data.email}</span>
                </p>
                <p className="mt-3">
                  <WorkOutlineIcon /> Occupation: <span>{data.work}</span>
                </p>
              </div>
              <div className="right_view col-lg-6 col-md-6 col-12">
                <div className="add_btn">
                  <button className="btn btn-primary mx-2">
                    <CreateIcon />
                  </button>
                  <button className="btn btn-danger">
                    <DeleteIcon />
                  </button>
                </div>
                <p className="mt-5">
                  <PhoneIphoneIcon />
                  Mobile: <span>{data.mobile}</span>{" "}
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Location: <span>{data.address}</span>{" "}
                </p>
                <p className="mt-3">
                  Description : <span>{data.description}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
