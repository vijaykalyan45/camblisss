import React from "react";

const StepAreaSection = () => {
  const stepData = [
    {
      id: 1,
      title: "Script",
      number: "01",
      description:
        "It's important to note that these steps are an overview of the filmmaking process.",
    },
    {
      id: 2,
      title: "Shot List",
      number: "02",
      description:
        "It's important to note that these steps are an overview of the filmmaking process.",
    },
    {
      id: 3,
      title: "Story",
      number: "03",
      description:
        "It's important to note that these steps are an overview of the filmmaking process.",
    },
    {
      id: 4,
      title: "Rehearsals",
      number: "04",
      description:
        "It's important to note that these steps are an overview of the filmmaking process.",
    },
    {
      id: 5,
      title: "Preparation",
      number: "05",
      description:
        "It's important to note that these steps are an overview of the filmmaking process.",
    },
    {
      id: 6,
      title: "Camera",
      number: "06",
      description:
        "It's important to note that these steps are an overview of the filmmaking process.",
    },
    {
      id: 7,
      title: "Sound",
      number: "06",
      description:
        "It's important to note that these steps are an overview of the filmmaking process.",
    },
    {
      id: 8,
      title: "Filming",
      number: "07",
      description:
        "It's important to note that these steps are an overview of the filmmaking process.",
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
