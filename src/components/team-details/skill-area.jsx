import React from "react";

const SkillArea = () => {
  return (
    <>
      <section className="skill-area pt-80 pb-80">
        <div className="container">
          <div className="animation__pricing">
            <div className="row g-5">
              <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="skill-content service__item-2">
                  <h3 className="skill-content-title mb-20">Skills</h3>
                  <p className="mb-40">
                    One of the largest food retailers needed to automate
                    inspection and maintenance processes in their stores and
                    update their troubleshooting reports. Retail companies have
                    notoriously complex requirements when it comes to ongoing
                    maintenance,
                  </p>
                  <div className="team-skill--content">
                    <div className="bd-skill__wrapper mb-25">
                      <div className="bd-skill--title__wrapper">
                        <h5 className="bd-skill--title">Patrolling</h5>
                        <span style={{ insetInlineStart: "80%" }}>80%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-duration="1s"
                          data-wow-delay="0.5s"
                          role="progressbar"
                          style={{
                            width: "80%",
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: " 0.5s",
                            animationName: "slideInLeft",
                          }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-skill__wrapper mb-25">
                      <div className="bd-skill--title__wrapper">
                        <h5 className="bd-skill--title">Homicide</h5>
                        <span style={{ insetInlineStart: "70%" }}>70%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-duration="1s"
                          data-wow-delay="0.5s"
                          role="progressbar"
                          style={{
                            width: "70%",
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: " 0.5s",
                            animationName: "slideInLeft",
                          }}
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-skill__wrapper mb-0">
                      <div className="bd-skill--title__wrapper">
                        <h5 className="bd-skill--title">Shooting</h5>
                        <span style={{ insetInlineStart: "95%" }}>95%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-duration="1s"
                          data-wow-delay="0.5s"
                          role="progressbar"
                          style={{
                            width: "95%",
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: " 0.5s",
                            animationName: "slideInLeft",
                          }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="skill-content-info service__item-2">
                  <h3 className="skill-content-title mb-20">
                    Career Guidelines
                  </h3>
                  <p className="mb-35">
                    One of the largest food retailers needed to automate
                    inspection and maintenance processes in their stores and
                    update their troubleshooting reports. Retail companies have
                    notoriously complex requirements when it comes to ongoing
                    maintenance,
                  </p>
                  <p>
                    One of the largest food retailers needed to automate
                    inspection and maintenance processes in their stores and
                    update their troubleshooting reports. Retail companies have
                    notoriously complex requirements when it comes to ongoing
                    maintenance,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillArea;
