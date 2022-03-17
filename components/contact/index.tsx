import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import Enquery from "./Enquery";
import TellUs from "./TellUs";
import ContactTitle from "./Title";
import Ways from "./Ways";

type contactDetails = {
  email: string;
  title: string;
  description: string;
  fax: string;
  phoneNumber: string;
};

const ContactComponent = () => {
  const [contactDetails, setContactDetails] = useState<contactDetails>();

  const getContactData = useHttp({
    url: "/contact-details",
    method: "get",
    onSucsses: (data: any) => {
      setContactDetails(data[0]);
    },
  });

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <div>
      {contactDetails && (
        <ContactTitle
          title={contactDetails.title}
          description={contactDetails.description}
        />
      )}

      <TellUs />
      <Enquery />
      {contactDetails && (
        <Ways
          email={contactDetails.email}
          fax={contactDetails.fax}
          phoneNumber={contactDetails.phoneNumber}
        />
      )}
    </div>
  );
};

export default ContactComponent;
