import Image from "next/image";
import React, { Fragment } from "react";
import classes from "./capability.module.css";

const PlateCapability = () => {
  const tableData = [
    { patientBlood: "O-", donarBlood: "O-" },
    { patientBlood: "O+ ", donarBlood: "O-, O+" },
    { patientBlood: "B- ", donarBlood: "B-, O-" },
  ];

  const table = (
    <Fragment>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Patients group</th>
            <th>Compatible plasma donor</th>
          </tr>
          {tableData.map(({ donarBlood, patientBlood }, i) => (
            <tr key={i}>
              <td> {patientBlood} </td>
              <td>{donarBlood}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );

  return (
    <section className={classes.section}>
      <div className={classes.description}>
        <h1 style={{ color: "#e42312" }}> 2. Plasma compatibility</h1>
        <p>
          {`Plasma may contain anti-A, anti-B or both anti-A and anti-B antibodies depending on your blood group. If you require plasma you should only receive plasma that doesn’t contain an antibody which could attack the antigens on your own red cells.
Group A patients have A antigen on their red cells, so they can’t receive group O or group B plasma as the anti-A will attack their red cells. Group B patients have B antigen on their red cells, so they can’t receive group O or group A plasma as the anti-B will attack their red cells.
Group AB recipients can only receive group AB plasma. Group O recipients don’t have either A or B antigen, so can safely receive plasma of any blood group type..`}
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

export default PlateCapability;
