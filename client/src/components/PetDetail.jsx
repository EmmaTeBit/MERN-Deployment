import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PetDetail = (props) => {
  const [pet, setPet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/" + id)
      .then((res) => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card w-50 mx-auto mt-5 p-4">
      <h1>Pet Details</h1>
      <div>
        <h5>Name: {pet.name}</h5>
        <h5>Breed: {pet.breed}</h5>
        <h5>Description: {pet.description}</h5>
        <Link to={"/"} className="btn btn-warning">
          Home
        </Link>
        <Link className="btn btn-success" to={"/update/" + pet._id}>
          Edit
        </Link>
      </div>
    </div>
  );
};
export default PetDetail;
