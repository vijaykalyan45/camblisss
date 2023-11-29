import useServicesFatchingData from "@hooks/use-services-fatching";
import Link from "next/link";
import React from "react";

const ServicesSection = () => {
  const services = useServicesFatchingData()

  return (
    <div className="service-area section-spacing-top">
      <div className="container">
        <div className="fade_animation">
          <div className="row g-5">
            {services?.slice(14, 18).map((item) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item._id}
              >
                <div className="fm-service-bright-single bright-single text-center fade__anim-item">
                  <i className={item?.icon}></i>
                  <h4 className="fm-service-bright-single-title">
                    <Link href={`/service-details/${item._id}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
