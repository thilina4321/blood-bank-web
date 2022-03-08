import Image from "next/image";
import React, { Fragment } from "react";
import classes from "./capability.module.css";

const Capability = () => {
  const tableData = [
    { patientBlood: "O-", donarBlood: "O-" },
    { patientBlood: "O+ ", donarBlood: "O-, O+" },
    { patientBlood: "B- ", donarBlood: "B-, O-" },
  ];

  const table = (
    <Fragment>
      <table className={classes.table}>
        <tr>
          <th>Patients blood group</th>
          <th>Donor blood group</th>
        </tr>
        {tableData.map(({ donarBlood, patientBlood }, i) => (
          <tr key={i}>
            <td> {patientBlood} </td>
            <td>{donarBlood}</td>
          </tr>
        ))}
      </table>
    </Fragment>
  );

  return (
    <section className={classes.section}>
      <div className={classes.description}>
        <h1 style={{color:'#e42312'}}> 1.  Red cell compatibility</h1>
        <p>
          {` Because of the reasons above, it’s best that patients receive red cell
        components of identical ABO group and RhD type in their transfusions.
        Sometimes that’s not possible, like in an emergency when the patient’s
        blood type is unknown and they need blood urgently. In this instance, O
        Rh negative is the universal red cell donor blood and can be given to
        anyone with any blood type.`}
        </p>
        <Image src="/git.png" height={100} width={100} alt={"title"} />
      </div>
      <div className={classes.table__section}>
        <h3>Safe blood types for each patient blood group:</h3>
        {table}
      </div>
    </section>
  );
};

export default Capability;
