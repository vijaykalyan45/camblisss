import React from "react";

const StepAreaSection = () => {
  const stepData = [
    {
      id: 1,
      title: "Planning",
      // number: "01",
      description:
        "It's important to develop a timeline, budget, project plan to have clear idea.",
    },
    {
      id: 2,
      title: "Design",
      // number: "02",
      description:
        " Create visual representation of the website's structure and layout.",
    },
    {
      id: 3,
      title: "Content Creation",
      // number: "03",
      description:
        "Generating text, images, videos, and other multimedia elements.",
    },
    {
      id: 4,
      title: "Development",
      // number: "04",
      description:
        "website's visual interface and server-side functionality is implemented.",
    },
    {
      id: 5,
      title: "Testing",
      // number: "05",
      description:
        "Identify, enhance and address all types of vulnerabilities.",
    },
    {
      id: 6,
      title: "Deployment",
      // number: "06",
      description:
        "Integrate and Make the website go live for public access.",
    },
    {
      id: 7,
      title: "Support & Maintenance",
      // number: "06",
      description:
        "Address any post-launch issues and implement updates.",
    },
    {
      id: 8,
      title: "Marketing & Promotion",
      // number: "07",
      description:
        "Integrate social media channels and marketing efforts.",
    },
  ];
  return (
    <section className="step-area section-spacing-top">
      <div className="container">
        <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="section-main-title title-anim step-main-title">
                Steps To Success
              </h2>
            </div>
          </div>
        </div>
        <div className="step-main-wrapper wow fadeInUp" data-wow-delay="0.4s">
          <div className="row g-5">
            {stepData.map((item) => (
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6"
                key={item.id}
              >
                <div className="step-item fade_bottom">
                  <div className="step-content">
                    <div className="step-content-heading">
                      <h4 className="step-title">{item.title}</h4>
                      <span className="step-number">{item.number}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default StepAreaSection;
