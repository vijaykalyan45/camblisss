// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const PortfolioSection = () => {
//   const [portfolios, setPortfolios] = useState([]);
//     //portfolio data
//     useEffect(() => {
//       axios
//         .get(`${process.env.BASE_URL}portfolio/all-portfolio`)
//         .then((res) => {
//           setPortfolios(res.data);
//         })
//         .catch((err) => console.log(err));
//     }, []);

//   return (
//     <div className="fm-director-films-area bg-common-black section-spacing fm-director-padding">
//       <div className="container">
//         <div
//           className="row section-title-spacing wow fadeInUp"
//           data-delay="0.3s"
//         >
//           <div className="col-12">
//             <div className="fm-director-sec-title text-center ">
//               <span className="section-subtitle title-anim">OUR WORK</span>
//               <div>
//                 <h2 className="section-main-title text-white title-anim featured-work-title">
//                   Featured Work
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container ">
//         <div className="fm-director-wrapper">
//           {portfolios.slice(0, 6).map((item) => (
//             <div
//               className="fm-director-films-single text-center wow fadeInUp"
//               data-wow-delay={item.delay}
//               key={item._id}
//             >
//               <Link href={`/portfolio-details/${item._id}`}>
//                 <div className="fm-director-films-img">
//                   <Image
//                     src={item.image}
//                     width={500}
//                     height={500}
//                     style={{ width: "100%", height: "auto" }}
//                     alt="img not found"
//                   />
//                 </div>
//               </Link>

//               <div className="fm-director-films-content">
//                 <span className="fm-director-films-subtitle">
//                   {item.subTitle}
//                 </span>
//                 <h4 className="fm-director-films-title">
//                   <Link href={`/portfolio-details/${item._id}`}>
//                     {item.title}
//                   </Link>
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioSection;



import React from "react";
import Image from "next/image";
import Link from "next/link";
import digitalmarketing from "@assets/img/logo/digitalmarketing.png";
import animation from "@assets/img/logo/animation.png";
import branding from "@assets/img/logo/branding.png";
import tv from "@assets/img/logo/5.png";
import mix from "@assets/img/logo/mix.png";
import uiux from "@assets/img/logo/uiux.png";

const PortfolioSection = () => {
  // Manually define your portfolio data
  const portfolios = [
    {
      _id: "1",
      // title: "Project 1",
      subTitle: "Web Design and Development",
      image: mix,
      delay: "0.3s",
    },
    {
      _id: "2",
      // title: "Project 2",
      subTitle: "Digital Marketing",
      image: digitalmarketing,
      delay: "0.6s",
    },
    {
      _id: "3",
      // title: "Project 2",
      subTitle: "Animation",
      image: animation,
      delay: "0.6s",
    },
    {
      _id: "4",
      // title: "Project 2",
      subTitle: "Branding & Creative Services",
      image: branding,
      delay: "0.6s",
    },
    {
      _id: "5",
      // title: "Project 2",
      subTitle: "TV Program",
      image: tv,
      delay: "0.6s",
    },
    {
      _id: "2",
      // title: "Project 2",
      subTitle: "UI/UX Design",
      image: uiux,
      delay: "0.6s",
    },
    // Add more portfolio items as needed
  ];

  return (
    <div className="fm-director-films-area bg-common-black section-spacing fm-director-padding">
      <div className="container">
        <div
          className="row section-title-spacing wow fadeInUp"
          data-delay="0.3s"
        >
          <div className="col-12">
            <div className="fm-director-sec-title text-center ">
              <span className="section-subtitle title-anim">OUR WORK</span>
              <div>
                <h2 className="section-main-title text-white title-anim featured-work-title">
                  Featured Work
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="fm-director-wrapper">
          {portfolios.map((item) => (
            <div
              className="fm-director-films-single text-center wow fadeInUp"
              data-wow-delay={item.delay}
              key={item._id}
            >
              <Link href={``}>
              {/* <Link href={`/portfolio-details/${item._id}`}> */}
                <div className="fm-director-films-img">
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div>
              </Link>

              <div className="fm-director-films-content">
                <span className="fm-director-films-subtitle">
                  {item.subTitle}
                </span>
                <h4 className="fm-director-films-title">
                <Link href={``}>
                  {/* <Link href={`/portfolio-details/${item._id}`}> */}
                    {item.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

