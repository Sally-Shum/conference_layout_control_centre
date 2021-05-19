// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import UserService from "../services/user.service";
// eslint-disable-next-line
import { Dropdown, Option } from "./Dropdown";
import { maxView, conferenceNames, images } from "./constant";
import "./Home.scss";
import { Formik } from 'formik';

const Home = () => {

  // const [conference, setConference] = useState("");
  // const [style, setStyle] = useState("");
  // const [content, setContent] = useState("");
  const [name, setName] = useState("");

  // useEffect(() => {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);
const choicesOfViews =  Array(maxView).fill(0);

  return (
    <div className="container">
      <Dropdown
        formLabel="Conference Name"
        buttonText="Send form"
        action="/"
      >
        {conferenceNames.map((cname) =>
          <Option value={cname} />
        )}
      </Dropdown>

      <Dropdown
        formLabel="Number of View(s):"
        buttonText="Send form"
        action="/"
      >
        <Option selected value="Favour" />
        {choicesOfViews.map((value, index) =>
          <Option value={index+1} />
        )}
      </Dropdown>

      { images.map(({id, src, title, description}) =>
      <button>
        <img class = "imgBtn" key={id} src={src} title={title} alt={description} />
      </button>
      )}

      <Dropdown
        formLabel="Save As:"
        buttonText="Save"
        action="/"
      >
        <Option selected value={1} />
        <Option value="1" />
        <Option value="2" />
        <Option value="3" />
        <Option value="4" />
        <Option value="5" />
        <Option value="6" />
      </Dropdown>
      <input
             type="text"
             name="styleName"
            //  onBlur={handleBlur}
            //  value={setName}
           />

    </div>
  );
};

export default Home;