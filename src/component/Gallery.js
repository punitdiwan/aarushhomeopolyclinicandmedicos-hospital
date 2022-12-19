import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1>Gallery</h1>
          <p>Doctor {" > "} Gallery</p>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-row">
          <div className="gallery-col">
            <img src="./img/g1.jpg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g2.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g3.jpeg" alt="" />
          </div>

          {/* <div className="gallery-col">
            <img src="./img/g4.jpg" alt="" />
          </div> */}
        </div>
      </div>

      {/* <div className="gallery">
        <div className="gallery-row">
          <div className="gallery-col">
            <img src="./img/g5.jpg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g6.jpg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g7.jpg" alt="" />
          </div>

          <div className="gallery-col">
            <img src="./img/g8.jpg" alt="" />
          </div>
        </div>
      </div> */}

      <div className="gallery">
        <div className="gallery-row">
          <div className="gallery-col gallery-col-1">
            <img src="./img/g9.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="gallery">
        <div className="gallery-row">
          <div className="gallery-col">
            <img src="./img/g1.jpg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g2.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g3.jpeg" alt="" />
          </div>

          <div className="gallery-col">
            <img src="./img/g4.jpg" alt="" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Gallery;
