// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import UserService from "../services/user.service";
// eslint-disable-next-line
import { Dropdown, Option } from "./Dropdown";
import { maxView, conferenceNames, images } from "./constant";
import "./Home.scss";

const Home = () => {
  const [view, setView] = useState(maxView);
  // const [conference, setConference] = useState("");
  // const [style, setStyle] = useState("");
  // const [content, setContent] = useState("");
  const [name, setName] = useState("");

  const handleSelect = (e) => {
    console.log(e);
    console.log(e.target.value);
    setView(parseInt(e.target.value));
  };

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
        {conferenceNames.map((cname, index) =>
          <Option key={index} value={cname} />
        )}
      </Dropdown>

      <Dropdown
        formLabel="Number of View(s):"
        buttonText="Send form"
        onChange={handleSelect}
        action="/"
        onSubmit={e => e.preventDefault()}
        defaultValue = "Favor"
        value={view}
      >
        <Option value="Favor" />
        {choicesOfViews.map((value, index) =>
          <Option key={index} value={index+1} />
        )}
      </Dropdown>

      <p>You selected {view} {typeof view} </p>
      <p>{JSON.stringify(images[view - 1])}</p>

      { images[view-1].map(({id, src}, index) =>
      <button key={index}>
        <img className = "imgBtn" src={src} alt={id} />
      </button>
      )}

      <Dropdown
        formLabel="Save As:"
        buttonText="Save"
        action="/"
        defaultValue="1"
      >
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

           <button>Save</button>
           <button>Save and Run</button>

    </div>
  );
};

export default Home;