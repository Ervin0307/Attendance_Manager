import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSubs from "./components/AddSubs";
import { useState } from "react";
import TimeTable from "./components/TimeTable";
import Login from "./components/Login";
import Signup from "./components/Signup"

function App() {
  const [reg, setReg] = useState({
    subject: "",
    criteria: "",
    totalClasses: "",
    attended: "",
    held: "",
  });

  const [records, setRecords] = useState([]);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setReg({ ...reg, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...reg, id: new Date().getTime().toString() };

    setRecords([...records, newRecord]);
    console.log(records);

    setReg({ subject: "", criteria:"", totalClasses: "", held: "",attended: "", });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home records={records} />} />
          <Route
            exact
            path="/subjects"
            element={
              <AddSubs
                records={records}
                reg={reg}
                handleInputs={handleInputs}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/timetable" element={<TimeTable />} />
        </Routes>
      </BrowserRouter>

      {/* <ViewSubs /> */}
    </>
  );
}

export default App;
