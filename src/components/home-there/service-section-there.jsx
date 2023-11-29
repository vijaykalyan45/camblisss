import useServicesFatchingData from "@hooks/use-services-fatching";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceSectionThere = () => {
 const services = useServicesFatchingData();

  return (
    <section className="fm-services-area section-spacing">
      <div className="container">
        <div
          className="row justify-content-center section-title-spacing wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="col-xl-6">
            <div className="section-title text-center">
              <span className="section-subtitle title-anim">WHAT WE DO</span>
              <div>
                <h2 className="section-main-title title-anim">
                  Our Best Expertise
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" fade_animation">
          <div className="row g-5">
            {services.slice(8, 14).map((item) => (
              <div
                className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item._id}
              >
                <div className="fm-services-item fade__anim-item">
                  <div className="fm-services-icon">
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                  </div>
                  <div className="fm-services-content">
                    <h4 className="fm-services-title">
                      <Link href={`/service-details/${item._id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <p className="fm-services-text">{item.description}</p>
                    <div className="fm-btn services-btn">
                      <Link
                        href={`/service-details/${item._id}`}
                        className="fm-view-more"
                      >
                        {item.serviceBtn}
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionThere;
