import React from "react";
import Layout from "./../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : iamsangram2000@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 8250455810
          </p>
          <p className="mt-3">
            <BiSupport /> : 0000-00000-00000
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
