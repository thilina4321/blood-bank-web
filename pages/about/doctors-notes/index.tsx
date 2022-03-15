import React, { useEffect, useState } from "react";
import useHttp from "../../../hooks/useHttp";

const DoctorsNotes = () => {
  const [notes, setNotes] = useState([]);

  const getDoctorNotesReq = useHttp({
    url: "/blood-bank/doctors-notes",
    method: "get",
    onSucsses: (data: any) => {
      setNotes(data);
    },
  });

  useEffect(() => {
    getDoctorNotesReq();
  }, []);

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
