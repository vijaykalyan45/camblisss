import Image from "next/image";
import React from "react";
import imageOne from "@assets/img/gallery/18.png";
import useGlobalContext from "@hooks/use-context";

const ServiceMiddle = () => {
  const { service } = useGlobalContext();
  return (
    <div className="col-xxl-12">
      <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Service : </strong>
            {service.title ? service.title : "Filming Services"}
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>Industry : </strong>
            {service.description
              ? service.description
              : "Consequently, all our characters and film production services."}
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>View : </strong> Website{" "}
          </p>
        </div>
      </div>
      <div className="case-details-thumb">
        <Image
          data-speed="auto"
          src={imageOne}
          style={{ width: "100%", height: "100%" }}
          alt="image not found"
        />
      </div>
      <h4 className="case-subtitle mb-25 ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.23197 8L0 9.90086L2.38215 14.0991L5.616 12.2016L5.61782 16H10.3822L10.384 12.2016L13.6178 14.0991L16 9.90086L12.768 8L16 6.09914L13.6178 1.90086L10.384 3.79843L10.3822 0H5.61782L5.616 3.79843L2.38215 1.90086L0 6.09914L3.23197 8Z"
              fill="#BCA045"
            />
          </svg>
        </span>
        Objective
      </h4>
      <p className="mb-55 ">
        One of the largest food retailers needed to automate inspection and
        maintenance processes in their stores and update their troubleshooting
        reports. Retail companies have notoriously complex requirements when it
        comes to ongoing maintenance, and manual inspections can limit the
        ability to report and verify current conditions. The choice of font and
        font size with which Lorem ipsum is reproduced answers to specific needs
        that go beyond the simple and simple filling of spaces dedicated to
        accepting real texts and allowing to have hands an
        advertising/publishing product, both web and paper, true to reality.
      </p>
      <p className="mb-45 ">
        {" "}
        One of the main objectives for the new site was to attract new business
        and leave a memorable impression on (often busy) brand representatives
        and ad agencies. Secondary objective was to present Ali’s story in an
        immersive way in order to connect with his audience and express his love
        for storytelling and typography.
      </p>
      <h4 className="case-subtitle mb-25">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.23197 8L0 9.90086L2.38215 14.0991L5.616 12.2016L5.61782 16H10.3822L10.384 12.2016L13.6178 14.0991L16 9.90086L12.768 8L16 6.09914L13.6178 1.90086L10.384 3.79843L10.3822 0H5.61782L5.616 3.79843L2.38215 1.90086L0 6.09914L3.23197 8Z"
              fill="#BCA045"
            />
          </svg>
        </span>
        Solutions
      </h4>
      <p className="mb-30 ">
        The final website is minimal in design but rich in storytelling and
        interactivity.
        {`Ali's`} work is known for his attention to detail, surprising plot
        twists, and interesting storylines. We have added a couple of sleek and
        surprising interactions in order to reflect this on his website
      </p>
      <p className="">
        The portfolio features a flexible grid system were pre-defined rows can
        be used to build a grid that fits all needs. We have selected a
        contemporary sans-serif typeface that allows for distinct layout
        variations and dramatic size contrasts. The final website was brought to
        life by adding an experience layer of subtle animations and page
        transitions.
      </p>
    </div>
  );
};

export default ServiceMiddle;
