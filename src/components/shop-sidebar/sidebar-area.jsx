import React, { useState } from "react";
import Categories from "./catagories";
import Tags from "./tags";
import ShopSearchForm from "@components/forms/shop-search-form";
import { Range, getTrackBackground } from "react-range";
import SidebarMovie from "./sidebar-movie";

const STEP = 0.1;
const MIN = 0;
const MAX = 500;

const SidebarArea = ({ keyword, setKeyword, selectCategory, categorys }) => {
  const handleSubmit = () => {
    setKeyword(keyword);
  };
  const [values, setValues] = useState([25, 225]);
  return (
    <div className="col-xxl-12">
      <div className="widget fm-widget widget-search mb-45">
        <ShopSearchForm
          keyword={keyword}
          setKeyword={setKeyword}
          onSubmit={handleSubmit}
        />
      </div>
      <Categories selectCategory={selectCategory} />
      <div className="widget fm-widget widget-filter  mb-40">
        <h4 className="fm-widget-heading-1-6 mb-20">FILTER BY PRICE</h4>
        <div className="fm-slider-range">
          <div id="fm-slider-range" className="mb-5-px">
            <Range
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => {
                setValues(values);
              }}
              renderTrack={({ props, children }) => (
                <div
                  className="slider-range-wrap-inner"
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "2px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values,
                        colors: ["#ccc", "#777", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div className="slider-range-button" {...props}>
                  <div
                    className="slider-range-button-bar"
                    style={{
                      height: "12px",
                      width: "12px",
                      backgroundColor: "#777",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              )}
            />
          </div>
          <p>
            <output id="output">
              ${values[0].toFixed(1)} - ${values[1].toFixed(1)}
            </output>
          </p>
        </div>
      </div>
      <SidebarMovie />
      <Tags />
    </div>
  );
};

export default SidebarArea;
