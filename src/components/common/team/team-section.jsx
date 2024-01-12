// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const TeamSection = () => {
//   const [teams, setTeams] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${process.env.BASE_URL}team/all-team`)
//       .then((res) => {
//         setTeams(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="fm-director-team-area team__animation bg-common-black section-spacing fix">
//       <div className="container">
//         <div className="row wow fadeInUp" data-wow-delay="0.3s">
//           <div className="col-xl-12">
//             <div className="fm-director-team-title text-center">
//               <span className="section-subtitle title-anim">EXPERT TEAM</span>
//               <div>
//                 <h2 className="section-main-title text-white title-anim team-name-clr">
//                   Meet My Team
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row g-5 gy-50">
//           {teams.slice(0, 4).map((item) => (
//             <div
//               className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
//               data-wow-delay={item.delay}
//               key={item._id}
//             >
//               <div className="fm-director-team-single team__item">
//                 <Link
//                   href={`/team-details/${item._id}`}
//                   className="fm-director-team"
//                 >
//                   <Image
//                     src={item.teamImg}
//                     width={500}
//                     height={500}
//                     style={{ width: "100%", height: "auto" }}
//                     alt="img not found"
//                   />
//                   <span className="fm-director-sign">{item.director}</span>
//                 </Link>
//                 <div className="fm-director-content">
//                   <span className="fm-director-designation">
//                     {item.designation}
//                   </span>
//                   <h4 className="fm-director-name">
//                     <Link
//                       href={`/team-details/${item._id}`}
//                       className="team-name-clr"
//                     >
//                       {item.teamName}
//                     </Link>
//                   </h4>
//                   <div className="fm-director-social social-hov-clr">
//                     {item.socialIcons &&
//                       item.socialIcons.map((icons) => (
//                         <Link key={icons._id} href={icons.url} target="_blank">
//                           <i className={icons.icon}></i>
//                         </Link>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;



import React from "react";
import Image from "next/image";
import Link from "next/link";
import sunaina from "@assets/img/logo/sunaina.png";
import avishek from "@assets/img/logo/avishek.jpg";
import bismay from "@assets/img/logo/bismay.jpg";
import gabriel from "@assets/img/logo/gabriel.jpg";
import vijay from "@assets/img/logo/vijay.jpg";
import arjun from "@assets/img/logo/arjun.png";
import pravath from "@assets/img/logo/pravath.png";
import pramod from "@assets/img/logo/Pramod.png";

const TeamSection = () => {
  const teams = [
    {
      _id: "1",
      teamName: "Avishek",
      director: "Director",
      designation: "CEO & Film-Maker",
      teamImg: avishek,
      delay: "0.3s",
      // socialIcons: [
      //   { _id: "1", icon: "fa-facebook", url: "https://www.facebook.com/" },
      //   { _id: "2", icon: "fa-twitter", url: "https://twitter.com/" },
      // ],
    },
    {
      _id: "2",
      teamName: "Pramod",
      // director: "Director",
      designation: "Operations Head",
      teamImg: pramod,
      delay: "0.6s",
      // socialIcons: [
      //   { _id: "3", icon: "fa-linkedin", url: "https://www.linkedin.com/" },
      //   { _id: "4", icon: "fa-instagram", url: "https://www.instagram.com/" },
      // ],
    },
    {
      _id: "3",
      teamName: "Arjun",
      // director: "Director",
      designation: "Photographer",
      teamImg:arjun,
      delay: "0.6s",
      // socialIcons: [
      //   { _id: "3", icon: "fa-linkedin", url: "https://www.linkedin.com/" },
      //   { _id: "4", icon: "fa-instagram", url: "https://www.instagram.com/" },
      // ],
    },
    {
      _id: "4",
      teamName: "Bismay",
      // director: "Director",
      designation: "Creative Director",
      teamImg: bismay,
      delay: "0.6s",
      // socialIcons: [
      //   { _id: "3", icon: "fa-linkedin", url: "https://www.linkedin.com/" },
      //   { _id: "4", icon: "fa-instagram", url: "https://www.instagram.com/" },
      // ],
    },
    {
      _id: "5",
      teamName: "Pravath",
      // director: "Director",
      designation: "Operations Head",
      teamImg: pravath,
      delay: "0.6s",
      // socialIcons: [
      //   { _id: "3", icon: "fa-linkedin", url: "https://www.linkedin.com/" },
      //   { _id: "4", icon: "fa-instagram", url: "https://www.instagram.com/" },
      // ],
    },
    {
      _id: "6",
      teamName: "Sunaina Mahesh",
      // director: "Director",
      designation: "Developer",
      teamImg: sunaina,
      delay: "0.6s",
      // socialIcons: [
      //   { _id: "3", icon: "fa-linkedin", url: "https://www.linkedin.com/" },
      //   { _id: "4", icon: "fa-instagram", url: "https://www.instagram.com/" },
      // ],
    },
    {
      _id: "7",
      teamName: "Sukchan H",
      // director: "Director",
      designation: "Executive",
      teamImg: gabriel,
      delay: "0.6s",
      // socialIcons: [
      //   { _id: "3", icon: "fa-linkedin", url: "https://www.linkedin.com/" },
      //   { _id: "4", icon: "fa-instagram", url: "https://www.instagram.com/" },
      // ],
    },
    {
      _id: "8",
      teamName: "Vijay Kalyan",
      // director: "Director",
      designation: "Jr.Developer",
      teamImg: vijay,
      delay: "0.6s",
      // socialIcons: [
      //   { _id: "3", icon: "fa-linkedin", url: "https://www.linkedin.com/" },
      //   { _id: "4", icon: "fa-instagram", url: "https://www.instagram.com/" },
      // ],
    },
    // Add more team members as needed
  ];

  return (
    <div className="fm-director-team-area team__animation bg-common-black section-spacing fix">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-xl-12">
            <div className="fm-director-team-title text-center">
              <span className="section-subtitle title-anim">EXPERT TEAM</span>
              <div>
                <h2 className="section-main-title text-white title-anim team-name-clr">
                  Meet Our Team
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5 gy-50">
          {teams.map((item) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={item.delay}
              key={item._id}
            >
              <div className="fm-director-team-single team__item">
                <Link
                  href={`/team-details/${item._id}`}
                  className="fm-director-team"
                >
                  <Image
                    src={item.teamImg}
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                  <span className="fm-director-sign">{item.director}</span>
                </Link>
                <div className="fm-director-content">
                  <span className="fm-director-designation">
                    {item.designation}
                  </span>
                  <h4 className="fm-director-name">
                    <Link
                      href={`/team-details/${item._id}`}
                      className="team-name-clr"
                    >
                      {item.teamName}
                    </Link>
                  </h4>
                  <div className="fm-director-social social-hov-clr">
                    {item.socialIcons &&
                      item.socialIcons.map((icons) => (
                        <Link key={icons._id} href={icons.url} target="_blank">
                          <i className={icons.icon}></i>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;























