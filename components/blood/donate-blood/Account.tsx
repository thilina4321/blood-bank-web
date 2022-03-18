import Image from "next/image";
import React, { Fragment, useState } from "react";
import MyButton from "../../../shared/MyButton";
import MyInput from "../../../shared/MyInput";
import classes from "./account.module.css";

type prevDonations = {
  date: string;
  place: string;
  time: string;
  id: string;
};

const DonatorAccount = () => {
  const [selectNumber, setSelectNumber] = useState<number>(0);
  const [donations, setDonations] = useState<prevDonations[]>([
    { id: "1", time: "12.30", date: "12 th 2020 Nov", place: "colombo" },
    { id: "2", time: "12.30", date: "12 th 2020 Nov", place: "colombo" },
  ]);
  const [upDon, setUpDon] = useState<prevDonations[]>([
    { id: "1", time: "12.30", date: "12 th 2020 Nov", place: "kelaniya" },
    { id: "2", time: "12.30", date: "12 th 2020 Nov", place: "kelaniya" },
  ]);

  const selectTab = (tabNum: number) => {
    setSelectNumber(tabNum);
  };

  return (
    <section className={classes.section}>
      <Image
        className={classes.img}
        height={200}
        width={200}
        src="/research.jpeg"
        alt="user"
      />

      <div className={classes.header}>
        <MyButton clickHandler={() => selectTab(0)} name="Book Time" />
        <MyButton clickHandler={() => selectTab(1)} name="Upcomming Donation" />
        <MyButton clickHandler={() => selectTab(2)} name="Previous Donation" />
        <MyButton clickHandler={() => selectTab(3)} name="Account Details" />
      </div>

      {selectNumber === 0 ? (
        <BookingDetails />
      ) : selectNumber === 1 ? (
        <PreviousDonations donations={upDon} />
      ) : selectNumber === 2 ? (
        <PreviousDonations donations={donations} />
      ) : (
        <AccountDetails />
      )}
    </section>
  );
};

export default DonatorAccount;

const BookingDetails = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = () => {};
  return (
    <section className={classes.form}>
      <MyInput value={fullName} setValue={setFullName} label="Full Name" />
      <MyInput type="date" value={email} setValue={setEmail} label="Date" />
      <MyInput type="time" value={email} setValue={setEmail} label="Time" />

      <MyButton clickHandler={submitHandler} name="Edit Details" />
    </section>
  );
};

const AccountDetails = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = () => {};
  return (
    <section className={classes.form}>
      <MyInput value={fullName} setValue={setFullName} label="Full Name" />
      <MyInput value={email} setValue={setEmail} label="Email" />

      <MyButton clickHandler={submitHandler} name="Book Time" />
    </section>
  );
};

const PreviousDonations: React.FC<{ donations: prevDonations[] }> = (props) => {
  const { donations } = props;

  return (
    <section className={classes.donations}>
      {donations.map((don) => (
        <Fragment key={don.id}>
          <div className={classes.donation}>
            <p> Donation Location : {don.place} </p>
            <p> Donation Time : {don.time} </p>
            <p> Donation Date : {don.date} </p>
          </div>
        </Fragment>
      ))}
    </section>
  );
};
