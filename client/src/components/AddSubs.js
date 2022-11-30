import React from "react";

const AddSubs = (props) => {
  // const [reg, setReg] = useState({
  //     subject: "",
  //     totalClasses: "",
  // })

  // const [records, setRecords]   = useState([])

  // const handleInputs = (e) => {

  //     const name = e.target.name;
  //     const value = e.target.value;
  //     console.log(name,value);

  //     setReg({ ...props.reg, [name]: value });
  // }

  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const newRecord = { ...props.reg, id: new Date().getTime().toString() };

  //     setRecords([...props.records, newRecord]);
  //     console.log(records)

  //     setReg({ subject: "", totalClasses: "" });

  // }

  return (
    <>
      <form action="" onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="subject">Subject Name: </label>
          <input
            type="text"
            autoComplete="off"
            value={props.reg.subject}
            onChange={props.handleInputs}
            name="subject"
            id="subject"
          />
        </div>
        <div>
          <label htmlFor="criteria">Attendance Criteria: </label>
          <input
            type="text"
            autoComplete="off"
            value={props.reg.criteria}
            onChange={props.handleInputs}
            name="criteria"
            id="criteria"
          />
        </div>
        <div>
          <label htmlFor="totalClasses">Total No. of Classes: </label>
          <input
            type="text"
            autoComplete="off"
            value={props.reg.totalClasses}
            onChange={props.handleInputs}
            name="totalClasses"
            id="totalClasses"
          />
        </div>
        <div>
          <label htmlFor="held">No. of Classes Held: </label>
          <input
            type="text"
            autoComplete="off"
            value={props.reg.held}
            onChange={props.handleInputs}
            name="held"
            id="held"
          />
          </div>
        <div>
          <label htmlFor="attended">No. of Classes Attended: </label>
          <input
            type="text"
            autoComplete="off"
            value={props.reg.attended}
            onChange={props.handleInputs}
            name="attended"
            id="attended"
          />
        </div>
        <button type="submit">Add Subject</button>
      </form>

      
    </>
  );
};
export default AddSubs;
