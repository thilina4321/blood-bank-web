import React from "react";

const DoctorsNotes = () => {
  const notes = [
    {
      id: 1,
      name: "Thilina Dilshan",
      note: "Donations can save people",
      position: "Specialist",
    },
    {
      id: 2,
      name: "Kamal Kamal",
      note: "Donations is good thing",
      position: "versatilist",
    },
  ];
  return (
    <div className="container">
      <h1> {`Doctor's Notes`} </h1>
      <div className="list__items">
        {notes.map(({ note, name, id, position }) => (
          <div className="list__item" key={id}>
            <p>{`" ${note} " `}</p>
            <h3> {name} </h3>
            <h4> {position} </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsNotes;
