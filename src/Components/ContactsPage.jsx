import React from "react";
import Contacts from "./Contacts";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer";

const ContactsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",

        justifyContent: "space-between",
      }}
    >
      <TopBar></TopBar>
      <div
        style={{
          width: "600px",
        }}
      >
        <Contacts></Contacts>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactsPage;
