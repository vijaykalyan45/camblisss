import Image from "next/image";
import React from "react";
import imageOne from "@assets/img/logo/websitehero.png";
import useGlobalContext from "@hooks/use-context";

const ServiceMiddle = () => {
  const { service } = useGlobalContext();
  return (
    <div className="col-xxl-12">
      {/* <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Service : </strong>
            {service.title ? service.title : "Filming Services"}
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>Industry : </strong>
            {service.description
              ? service.description
              : "Consequently, all our characters and film production services."}
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>View : </strong> Website{" "}
          </p>
        </div>
      </div> */}
      <div className="case-details-thumb">
        <Image
          data-speed="auto"
          src={imageOne}
          style={{ width: "100%", height: "100%" }}
          alt="image not found"
        />
      </div>
      <h4 className="case-subtitle mb-25 ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.23197 8L0 9.90086L2.38215 14.0991L5.616 12.2016L5.61782 16H10.3822L10.384 12.2016L13.6178 14.0991L16 9.90086L12.768 8L16 6.09914L13.6178 1.90086L10.384 3.79843L10.3822 0H5.61782L5.616 3.79843L2.38215 1.90086L0 6.09914L3.23197 8Z"
              fill="#BCA045"
            />
          </svg>
        </span>
        OBJECTIVE
      </h4>
      <p className="mb-55 ">
        At our company, we take pride in delivering professional website design and development services. Our Team of experts combine their technical skills with a deep understanding
        of user experience to create websites that exude professionalism and credibility.
      </p>
      <p className="mb-45 ">
        {" "}
      Cambliss is specialized in creating powerful website design and development solutions that go beyond asthetics. Our team of skilled designers and developers leverage their expertise
      to craft websites that are not only visually stunning but also highly functional and effective.
      </p>
      <p className="mb-45 ">
        {" "}
      Ore team specializes in  crafting stylish website design and development solutions that capture attention and leave a lasting impression. We understand the importance of asthetics
      and strive to create visual stunning websites that reflect your brand's unique style.
      </p>
      <h4 className="case-subtitle mb-25">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.23197 8L0 9.90086L2.38215 14.0991L5.616 12.2016L5.61782 16H10.3822L10.384 12.2016L13.6178 14.0991L16 9.90086L12.768 8L16 6.09914L13.6178 1.90086L10.384 3.79843L10.3822 0H5.61782L5.616 3.79843L2.38215 1.90086L0 6.09914L3.23197 8Z"
              fill="#BCA045"
            />
          </svg>
        </span>
       WHAT WE DO
      </h4>
      <p className="mb-30 ">
      <strong>Web Design</strong><br/>
      We create websites that are visually appealing and highly functional. Our team of talented designers carefully crafts each element of your website, ensuring a seamless and inituative user interface.
      </p>
      <p className="mb-30 ">
      <strong>Custom Icons</strong><br/>
Cambliss talented team of designers specializes in creating unique and captivating visuals that perfectly align with your brand's identity and messaging      </p>
<p className="mb-30 ">
      <strong>UI / UX</strong><br/>
we craft visually appealing and user - friendly designs that not only captures attention but also guide users through your website or application effortlessly      </p>
<p className="mb-30 ">
      <strong>Hosting</strong><br/>
     Our Hosting services provide you with a reliable  and secure  platform to host your website or application. We will make your site uptime and fast loading speeds, which is why
     we offer robust hosting solutions tailored to your specific needs.
      </p>
      {/* <p className="">
        The portfolio features a flexible grid system were pre-defined rows can
        be used to build a grid that fits all needs. We have selected a
        contemporary sans-serif typeface that allows for distinct layout
        variations and dramatic size contrasts. The final website was brought to
        life by adding an experience layer of subtle animations and page
        transitions.
      </p> */}
    </div>
  );
};

export default ServiceMiddle;
