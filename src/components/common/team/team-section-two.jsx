import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SocialIcon from "../social-icon/SocialIcon";

const TeamSectionTwo = ({ teamBottomBorder }) => {
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
    <>
      <div className="fm-director-team-area team-softhalf-bg team__animation section-spacing fix">
        <div className="container">
          <div
            className="row section-title-spacing wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-xl-12">
              <div className="section-title text-center">
                <span className="section-subtitle title-anim">
                  WINNING AWARD
                </span>
                <div>
                  <h2 className="section-main-title title-anim">
                    Meet my Team
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 gy-50">
            {teams.slice(0, 4).map((item) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item._id}
              >
                <div className="fm-director-team-single team__item">
                  <Link
                    className="fm-director-team"
                    href={`/team-details/${item._id}`}
                  >
                    <Image
                      src={item.teamImg}
                      width={500}
                      height={500}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                    <span className="fm-director-sign">Daniyel</span>
                  </Link>
                  <div className="fm-director-content">
                    <span className="fm-director-designation body-color">
                      {item.designation}
                    </span>
                    <h4 className="fm-director-name title-color">
                      <Link href={`/team-details/${item._id}`}>
                        {item.teamName}
                      </Link>
                    </h4>
                    <SocialIcon socialWrapperClass="fm-director-social" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {teamBottomBorder && (
        <div className="container">
          <div className="hr1"></div>
        </div>
      )}
    </>
  );
};

export default TeamSectionTwo;
