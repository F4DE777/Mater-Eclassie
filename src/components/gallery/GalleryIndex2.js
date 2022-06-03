import React from "react";

import Photos2 from "../../assets/Rectangle-2s@2x.png";
import Photos3 from "../../assets/Rectangle9err@2x.png";
import Photos4 from "../../assets/Rectangle-22@2x.png";
import Photos5 from "../../assets/Rectanglehlijkn@2x.png";
import Photos6 from "../../assets/Rectangle9rrf@2x.png";
import Photost8 from "../../assets/Rectangle9rrr@2x.png";
import Craft from "../../assets/craft.png";
import Exam from "../../assets/exam.png";
import Drama from "../../assets/drama.png";
import Grass from "../../assets/grass.png";
import Smile from "../../assets/smile2.png";
import Craft2 from "../../assets/craft2.png";

import Gift from "../../assets/gift.png";
import "../HeroSection.css";

function GalleryIndex2() {
  return (
    <>
      <table className="gallery">
        <tr>
          <td className="mic-img">
            <div
              style={{
                background: `url(${Craft}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td classname="col-md-3">
            <div
              style={{
                background: `url(${Gift}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>

          <td classname="col-md-3">
            <div
              style={{
                background: `url(${Exam}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td classname="col-md-3">
            <div
              style={{
                background: `url(${Drama}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>

          
        </tr>
        <tr>
          <td rowSpan="3" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Grass}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>

          <td rowSpan="4" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Smile}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td rowSpan="4" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Craft2}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td rowSpan="4" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Photos6}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}
export default GalleryIndex2;

