import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import useGlobalContext from "@hooks/use-context";
import { useEffect } from "react";
import axios from "axios";
import SocialIcon from "@components/common/social-icon/SocialIcon";

const TeamDetailsArea = ({ id }) => {
  const { team, setTeam } = useGlobalContext();
  const [singleTeam, setSingleTeam] = useState({});
  //get data
  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`${process.env.BASE_URL}team/all-team/${id}`)
        .then((res) => {
          setTeam(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id, setTeam]);

  //single team
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}team/single-team`)
      .then((res) => {
        setSingleTeam(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const percentage = 66;
  return (
    <div className="fm-team-details-area gray-bg section-spacing-top pb-50">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 col-lg-5 wow fmSlideInLeft"
            data-wow-delay="0.3s"
          >
            <div className="fm-team-details-img mb-40">
              {team?.teamImg || singleTeam?.teamImg ? (
                <Image
                  src={team?.teamImg || singleTeam?.teamImg}
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              ) : (
                <p>No image found</p>
              )}
            </div>
          </div>
          <div
            className="col-xl-7 col-lg-7 wow fmSlideInRight"
            data-wow-delay="0.3s"
          >
            <div className="fm-team-details-content-wrapper mb-30">
              <span className="section-subtitle title-anim">
                {team?.designation ? team.designation : singleTeam?.designation}
              </span>
              <h2 className="section-main-title team-details-sec title-anim">
                {team?.teamName ? team.teamName : singleTeam?.teamName}
              </h2>
              <p>
                I’m a world-renowned filmmaker who, for the past 9 years of my
                26-years career have specialized in creating incredible
                cinematic images no matter what the camera. Some of my most
                iconic work was created with Canon DSLRs. When it comes to
                whether she could return as the lead in a reboot, Sarah Michelle
                Gellar has been clear about her Slayer status.
              </p>
              <SocialIcon socialWrapperClass={"fm-director-social-2"}/>

              <div className="fm-member-skills">
                <h4 className="fm-member-skill-title is-border-right mb-40">
                  My Skills
                </h4>
                <div className="fm-member-skill-wrapper all__item-fade">
                  <div className="fm-member-skill-single">
                    <div className="fm-member-skill-circle">
                      <div className="fm-member-skill-circle-item">
                        <VisibilitySensor>
                          {({ isVisible }) => {
                            const percentage = isVisible ? 90 : 0;
                            return (
                              <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                              />
                            );
                          }}
                        </VisibilitySensor>
                      </div>
                    </div>
                    <span className="fm-member-skill-subtext">
                      <span>Makeup Concept</span>
                    </span>
                  </div>
                  <div className="fm-member-skill-single">
                    <div className="fm-member-skill-circle">
                      <div className="fm-member-skill-circle-item">
                        <VisibilitySensor>
                          {({ isVisible }) => {
                            const percentage = isVisible ? 70 : 0;
                            return (
                              <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                              />
                            );
                          }}
                        </VisibilitySensor>
                      </div>
                    </div>
                    <span className="fm-member-skill-subtext">
                      <span>Hiphot Dance</span>
                    </span>
                  </div>
                  <div className="fm-member-skill-single">
                    <div className="fm-member-skill-circle">
                      <div className="fm-member-skill-circle-item">
                        <VisibilitySensor>
                          {({ isVisible }) => {
                            const percentage = isVisible ? 50 : 0;
                            return (
                              <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                              />
                            );
                          }}
                        </VisibilitySensor>
                      </div>
                    </div>
                    <span className="fm-member-skill-subtext">
                      <span>Action Direction</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsArea;
