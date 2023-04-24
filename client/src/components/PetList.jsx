import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PetList = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet")
      .then((response) => {
        setAllPets(response.data);
      })
      .catch((err) => {
        // console.log(err.response);
      });
  });

  const handleDelete = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/pet/${idFromBelow}`)
      .then((response) => {
        // console.log("success on deleteing a pet");
      })
      .catch((err) => {
        // console.log("error deleting a pet", err.response);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>Add a Pet</h1>
          <Link to="/add-pet" className="btn btn-warning">
            Add a Pet
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Pets</th>
                <th>Breed</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allPets.map((pet, index) => {
                return (
                  <tr key={pet._id}>
                    <td>
                      <Link to={`/detail/${pet._id}`}>{pet.name}</Link>
                    </td>
                    <td>{pet.breed}</td>
                    <td>{pet.description}</td>
                    <td>
                      <Link
                        className="btn btn-primary"
                        to={`/update/${pet._id}`}
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-success"
                        onClick={() => handleDelete(pet._id)}
                      >
                        Adopted
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PetList;
