import React from "react";

function CurrentLayout() {
  return (
    <div className="currentLayout">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <button>
              <img style={{width: 90}}
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-mini-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000"
              alt=""
            />
            </button>
            
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Current Display</h1>
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

export default CurrentLayout;