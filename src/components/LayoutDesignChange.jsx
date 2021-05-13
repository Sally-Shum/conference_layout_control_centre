import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <button>
               <img style={{width: 100}}
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://image.shutterstock.com/image-photo/one-ripe-red-apple-fruit-260nw-704491450.jpg"
              alt=""
            />
            </button>
           
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Layout Design Change</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;