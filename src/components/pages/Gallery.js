import React from "react";
import Pex from "../../assets/craft2.png";
import Circle from "../../assets/Circle.svg";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import "./Gallery.css";
import GalleryIndex from "../../components/gallery/GalleryIndex";
import GalleryIndex2 from "../../components/gallery/GalleryIndex2";
import GalleryIndex3 from "../../components/gallery/GalleryIndex3";
import GalleryIndex0 from "../../components/gallery/GalleryIndex0";

import "./Gallery.css";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
function Gallery() {
    const [value, setValue] = React.useState(0);
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>

      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>

        <CBreadcrumbItem active>Gallery</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="gallery-head">
          <label2 htmlFor="">EXPLORE</label2>
          <h1>Gallery</h1>
          <p>
            Our Campus Have A Lot To Offer For Our Students{" "}
            <span className="levt">
              {" "}
              <img className="circle img-fluid " src={Circle} alt="" />
            </span>
          </p>
        </div>

        <div
          style={{
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          {/* <h2>Create Tabs in ReactJS using material-ui</h2> */}
          <Tabs
            className="albumHeader"
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(e, val) => {
              setValue(val);
            }}
          >
            <Tab label="All" />
            <Tab label="Classes" />
            <Tab label="Cultural Events" />
            <Tab label="Inaugurations" />
            <Tab label="Sports Contests" />

            <Tab label="School Facilities" />
          </Tabs>
          {/* <h3>{value + 1} </h3> */}
          {value === 0 ? <GalleryIndex /> : ""}
          {value === 1 ? <GalleryIndex2 /> : ""}
          {value === 2 ? <GalleryIndex3 /> : ""}
          {value === 3 ? <GalleryIndex3 /> : ""}
          {value === 4 ? <GalleryIndex2 /> : ""}
          {value === 5 ? <GalleryIndex2 /> : ""}
          {value === 6 ? <GalleryIndex2 /> : ""}
        </div>
      </section>
    </>
  );
}

export default Gallery;
