import { BrowserRouter, Route, Routes } from "react-router-dom";
import PetList from "./components/PetList";
import AddPet from "./components/AddPet";
import UpdatePet from "./components/UpdatePet";
import PetDetail from "./components/PetDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/update/:id" element={<UpdatePet />} />
          <Route path="/detail/:id" element={<PetDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
