import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const UpdatePet = (props) => {
  const { id } = useParams();
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petDescription, setPetDescription] = useState("");

  const [errors, setErrors] = useState({});
  const [petNotFound, setPetNotFound] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${id}`)
      .then((response) => {
        // console.log(response.data);
        setPetName(response.data.name);
        setPetBreed(response.data.breed);
        setPetDescription(response.data.description);
      })
      .catch((err) => {
        // console.log(err.response);
        setPetNotFound(`Pet NOT found using that ID`);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/pet/${id}`, {
        name: petName,
        breed: petBreed,
        description: petDescription,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        // console.log(err.response);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <div className="card w-50 mx-auto mt-5 p-4">
      <form onSubmit={submitHandler}>
        {petNotFound ? (
          <p>
            {petNotFound} <Link to={"/add-pet"}>Want to add a new Pet?</Link>
          </p>
        ) : null}
        <Link to="/" className="btn btn-warning mb-1">
          Home
        </Link>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="form-control"
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input
            type="text"
            id="breed"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            className="form-control"
          />
          {errors.breed ? <p>{errors.breed.message}</p> : null}
        </div>
        <div>
          <label htmlFor="description">Pet Description</label>
          <input
            type="text"
            id="description"
            value={petDescription}
            onChange={(e) => setPetDescription(e.target.value)}
            className="form-control"
          />
          {errors.description ? <p>{errors.description.message}</p> : null}
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatePet;
