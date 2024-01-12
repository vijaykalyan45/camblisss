// import React, { useEffect, useState } from "react";
// import bgImage from "@assets/img/services/director-service-bg.jpg";
// import Image from "next/image";
// import Link from "next/link";
// import axios from "axios";

// const ServiceSection = () => {
//   const [services, setServices] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${process.env.BASE_URL}service/all-service`)
//       .then((res) => {
//         setServices(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div className="fm-director-service-area soft-blackbg fix">
//       <div
//         className="fm-director-service-bg"
//         style={{ backgroundImage: `url(${bgImage.src})` }}
//       ></div>
//       <div className="container">
//         <div className="fm-director-service-wrapper section-spacing">
//           <div className="row">
//             <div className="col-xl-7 col-lg-12">
//               <div className="row wow fadeInUp" data-wow-delay="0.3s">
//                 <div className="col-12">
//                   <div className="fm-director-service-title">
//                     <span className="section-subtitle title-anim">
//                       SERVICES
//                     </span>
//                     <h2 className="section-main-title text-white title-anim mb-55">
//                       My Services
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//               <div className="row g-5 gy-50">
//                 {services.slice(0, 4).map((item) => (
//                   <div
//                     className="col-xl-6 col-sm-6 wow fadeInUp"
//                     data-wow-delay={item.delay}
//                     key={item._id}
//                   >
//                     <div className="fm-director-service-single fade_bottom">
//                       <Image
//                         src={item.image}
//                         width={500}
//                         height={500}
//                         style={{ width: "auto", height: "auto" }}
//                         alt="img not found"
//                       />
//                       <h4 className="fm-director-service-title">
//                         <Link href="/service">{item.title}</Link>
//                       </h4>
//                       <p>{item.description}</p>
//                       <Link
//                         href={`/service-details/${item._id}`}
//                         className="fm-director-service-btn arrow-effect"
//                       >
//                         View Details{" "}
//                         <span>
//                           <i className="fa-light fa-arrow-right-long"></i>
//                         </span>
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSection;







import React from "react";
import Image from "next/image";
import Link from "next/link";
import servicessection from "@assets/img/logo/servicessection.png";
import services1 from "@assets/img/logo/services1.png";
import services2 from "@assets/img/logo/services2.png";
import services3 from "@assets/img/logo/services3.png";
import services4 from "@assets/img/logo/services4.png";

const ServiceSection = () => {
  // Manually define your services data
  const services = [
    {
      _id: "1",
      title: "Branding & Creative Services",
      description: "our approach to branding is collaborative involving clients in every step of the process",
      image: services1,
      delay: "0.3s",
    },
    {
      _id: "2",
      title: "Website Design & Development",
      description: "Cambliss website design & development services are tailored in meeting unique needs",
      image: services2,
      delay: "0.6s",
    },
    {
      _id: "3",
      title: "Animation",
      description: "We bring your imagination to life through stunning 2D abd 3D Animations",
      image: services3,
      delay: "0.9s",
    },
    {
      _id: "4",
      title: "Digital Marketing",
      description: "From PPC to SEO, advertisting to content creation we cover all aspects of Digital Marketing",
      image: services4,
      delay: "1.2s",
    },
    {
      _id: "5",
      title: "UI/UX",
      description: "From PPC to SEO, advertisting to content creation we cover all aspects of Digital Marketing",
      image: services4,
      delay: "1.2s",
    },
    {
      _id: "6",
      title: "Visual Production",
      description: "From PPC to SEO, advertisting to content creation we cover all aspects of Digital Marketing",
      image: services4,
      delay: "1.2s",
    },
  ];

  return (
    <div className="fm-director-service-area soft-blackbg fix">
      <div
        className="fm-director-service-bg"
        style={{ backgroundImage: `url(${servicessection.src})` }}
      ></div>
      <div className="container">
        <div className="fm-director-service-wrapper section-spacing">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              <div className="row wow fadeInUp" data-wow-delay="0.3s">
                <div className="col-12">
                  <div className="fm-director-service-title">
                    <span className="section-subtitle title-anim">
                      SERVICES
                    </span>
                    <h2 className="section-main-title text-white title-anim mb-55">
                      My Services
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row g-5 gy-50">
                {services.slice(0, 6).map((item) => (
                  <div
                    className="col-xl-6 col-sm-6 wow fadeInUp"
                    data-wow-delay={item.delay}
                    key={item._id}
                  >
                    <div className="fm-director-service-single fade_bottom">
                      <Image
                        src={item.image}
                        width={500}
                        height={500}
                        style={{ width: "auto", height: "auto" }}
                        alt="img not found"
                      />
                      <h4 className="fm-director-service-title">
                        <Link href="/service">{item.title}</Link>
                      </h4>
                      <p>{item.description}</p>
                      <Link
                      href={``}
                        // href={`/service-details/${item._id}`}
                        className="fm-director-service-btn arrow-effect"
                      >
                        View Details{" "}
                        <span>
                          <i className="fa-light fa-arrow-right-long"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
