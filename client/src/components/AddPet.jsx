import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Pets.css";

const AddPet = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/pet", {
        name,
        breed,
        description,
        skills,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.err.errors);
      });
  };

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(",");
    if (skillsArray.length <= 3) {
      setSkills(skillsArray);
    } else {
      setErrors({
        skills: { message: "Pets may have between 0 and 3 skills" },
      });
    }
  };

  return (
    <div className="container">
      <h1>Add Pet</h1>
      <Link to="/" className="btn btn-warning">
        Home
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>

        <div className="mb-3">
          <label htmlFor="breed" className="form-label">
            Breed
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
          />
          {errors.breed ? <p>{errors.breed.message}</p> : null}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          {errors.description ? <p>{errors.description.message}</p> : null}
        </div>

        <div className="mb-3">
          <label htmlFor="skills" className="form-label">
            {/* 0-3 Skill- Seperate each array by an comma
            Example of 3 Skills: Sit,Bark,Stay
            Exmaple of more than 3 skill = erros : Sit,Bark,Stay, the 3rd comma will render the error message */}
            Skills (comma separated)
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleSkillsChange}
            value={skills.join(",")}
          />
          {errors.skills ? <p>{errors.skills.message}</p> : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPet;
