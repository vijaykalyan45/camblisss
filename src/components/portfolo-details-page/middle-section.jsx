import Image from "next/image";
import React, { useEffect, useState } from "react";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import axios from "axios";

const MiddleSection = ({ portfolio }) => {
  const [port, setPort] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}portfolio/single-portfolio`)
      .then((res) => {
        setPort(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="col-xxl-12">
      <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Client : </strong>
            {portfolio?.title ? portfolio.title : port.title}
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>Service : </strong>Netflix, Disney+, HBO Max
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>Industry : </strong>Filmmaking, Production Companies
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>View : </strong> Website{" "}
          </p>
        </div>
      </div>
      <div className="case-details-thumb">
        {portfolio?.image ? (
          <Image
            data-speed="auto"
            src={portfolio.image}
            width={500}
            height={500}
            style={{ width: "100%", height: "100%" }}
            alt="image not found"
          />
        ) : port?.image ? (
          <Image
            data-speed="auto"
            src={port.image}
            width={500}
            height={500}
            style={{ width: "100%", height: "100%" }}
            alt="image not found"
          />
        ) : (
          <p>No image found</p>
        )}
      </div>

      <h4 className="case-subtitle mb-25 ">
        <span>
          <CaseSubtitleIcon />
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
          <CaseSubtitleIcon />
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

export default MiddleSection;
