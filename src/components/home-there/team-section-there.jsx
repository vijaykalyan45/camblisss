import useGlobalContext from "@hooks/use-context";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TeamSectionThere = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}team/all-team`)
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <section className="team-area section-spacing fix">
      <div className="container">
        <div className="row g-5 align-items-end section-title-spacing">
          <div
            className="col-lg-8 col-md-8 wow fmSlideInLeft"
            data-wow-delay="0.3s"
          >
            <div className="team-sec-wrapper">
              <div className="section-title">
                <span className="section-subtitle featured-sub-title title-anim">
                  OUR TEAM
                </span>
                <h2 className="section-main-title team-sec-title title-anim">
                  Creative Team
                </h2>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 wow fmSlideInRight"
            data-wow-delay="0.3s"
          >
            <div className=" team-btn d-flex justify-content-md-end fade_bottom">
              <Link href="/contact" className="fill-btn">
                View All
                <span>
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fm-team-border">
          <div className="fm-team-wrapper wow fadeInUp" data-wow-delay="0.5s">
            {teams &&
              teams.slice(4, 8).map((item) => (
                <div className={item.teamItemClass} key={item._id}>
                  <div className="fm-team-thumb w-img">
                    <Link href={`/team-details/${item._id}`}>
                      <Image
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                        src={item.teamImg}
                        alt="img not found"
                      />
                    </Link>
                  </div>
                  <div className="fm-team-content">
                    <h4 className="fm-team-title ">
                      <Link href={`/team-details/${item._id}`}>
                        {item.teamName}
                      </Link>
                    </h4>
                    <span className="fm-team-designation ">
                      {item.designation}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionThere;
