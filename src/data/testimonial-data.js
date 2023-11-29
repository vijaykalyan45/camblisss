import testimonialOne from "@assets/img/brand/testi-brand.png";
import TestimonialIconOne from "@svg/testimonial-icon-one";
//home-4 img
import TestimonialImgOne from "@assets/img/testimonial/01.png";
import TestimonialImgTwo from "@assets/img/testimonial/02.png";
import TestimonialImgThere from "@assets/img/testimonial/03.png";

const testimonialData = [
  //home-1 and home-2, home-3
  {
    id: 1,
    image: testimonialOne,
    author: "Rowan san",
    icon: <TestimonialIconOne />,
    description:
      "I Have Worked With Faime The Past Couple Of Years And Have Purchased 10+ Videos. My Company Is All Across The US And Working With Faime Was Easy.",
  },
  {
    id: 2,
    image: testimonialOne,
    author: "Ander son",
    icon: <TestimonialIconOne />,
    description:
      "I Have Worked With Faime The Past Couple Of Years And Have Purchased 10+ Videos. My Company Is All Across The US And Working With Faime Was Easy.",
  },
  {
    id: 3,
    image: testimonialOne,
    author: "Adam qual",
    icon: <TestimonialIconOne />,
    description:
      "I Have Worked With Faime The Past Couple Of Years And Have Purchased 10+ Videos. My Company Is All Across The US And Working With Faime Was Easy.",
  },
  //home-4 data
  {
    id: 4,
    image: TestimonialImgOne,
    author: "Zekson D. Silva",
    subTitle: "Script Writer",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium, totam  rem aperiam, eaque ipsa quae ab illo inventore veritatis et qarchitecto. ",
    rettings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "fas fa-star-half-alt" },
    ],
  },
  {
    id: 5,
    image: TestimonialImgTwo,
    author: "Kalima H. Dalia",
    subTitle: "Makeup Artist",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium, totam  rem aperiam, eaque ipsa quae ab illo inventore veritatis et qarchitecto. ",
    rettings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "fas fa-star-half-alt" },
    ],
  },
  {
    id: 6,
    image: TestimonialImgThere,
    author: "Zeki D. Silva",
    subTitle: "Junior Director",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium, totam  rem aperiam, eaque ipsa quae ab illo inventore veritatis et qarchitecto. ",
    rettings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "fas fa-star-half-alt" },
    ],
  },
];
export default testimonialData;
