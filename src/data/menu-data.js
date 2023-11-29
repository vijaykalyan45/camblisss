const menu_data = [
  {
    id: 1,
    hasDropdown: true,
    active:true,
    title: "Home",
    link: "/",
    submenus:[]
    // submenus: [
    //   { title: "Movie Director", link: "/" },
    //   { title: "Filming Works", link: "/filming-works" },
    //   { title: "Movie and Film", link: "/movie-film" },
    //   { title: "Filming History", link: "/filming-history" },
    //   { title: "Popular Movies", link: "/popular-movies" },
    // ],
  },
  {
    id: 2,
    hasDropdown: true,
    // title: "Movie",
    title:"Services",
    link: "/Services",
    submenus:[]
    // submenus: [
    //   { title: "Movie", link: "/movie" },
    //   { title: "Movie-details", link: "/movie-details" },
    // ],
  },
  // {
  //   id: 3,
  //   hasDropdown: true,
  //   title: "Portfolio",
  //   link: "/portfolio-masonary",
  //   submenus:[],
  //   submenus: [
  //     { title: "Portfolio-Masonary", link: "/portfolio-masonary" },
  //     { title: "Portfolio-Slider", link: "/portfolio-slider" },
  //     { title: "Portfolio Details", link: "/portfolio-details" },
  //   ],
  // },

  {
    id: 4,
    // title: "Pages",
    title:"About US",
    megaMenu: true,
    link: "/About-US",
    pages: true,
    
    mega_menus: [
      {
        // title: "Page Layout 1",
        link: "",
        submenus:[],
        submenus: [
          // { title: "About us", link: "/filming-history" },
          // { title: "Service", link: "/service" },
          // { title: "Service Details", link: "/service-details" },
          // { title: "Team", link: "/team" },
          // { title: "Team Details", link: "/team-details" },
          // { title: "Pricing", link: "/pricing" },
        ],
      },
      {
        // title: "Page Layout 2",
        link: "",
        submenus:[],
        submenus: [
          { title: "Faq", link: "/faq" },
          { title: "Terms & Conditions", link: "" },
          { title: "Privacy & Policy", link: "" },
          { title: "Pricing", link: "/pricing" },
          // { title: "Terms & Conditions", link: "/terms-conditions" },
          // { title: "Privacy & Policy", link: "/policy-privacy" },
          // { title: "Login", link: "/login" },
          // { title: "Register", link: "/register" },
          // { title: "404", link: "/404" },
        ],
      },
      {
        // title: "Page Layout 3",
        link: "",
        submenus:[],
        submenus: [
          // { title: "Shop-Sidebar", link: "/shop-sidebar" },
          // { title: "Shop 4 Column", link: "/shop-4" },
          // { title: "Cart", link: "/cart" },
          // { title: "Checkout", link: "/checkout" },
          // { title: "Shop Details", link: "/shop-details" },
          // { title: "Contact", link: "/contact" },
        ],
      },
    ],
  },
  {
    id: 5,
    hasDropdown: true,
    title: "Careers",
    link: "/blog",
    submenus:[],
    // submenus: [
    //   { title: "Blog Standard", link: "/blog" },
    //   { title: "Blog Wide", link: "/blog-wide" },
    //   { title: "Blog Details", link: "/blog-details" },
    // ],
  },
  {
    id: 6,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
  // secondary dropdown
  {
    id: 7,
    secondaryDropdown: true,
    title: "Pages",
    link: "/blog",
    // submenus: [
    //   { title: "About us", link: "/about" },
    //   { title: "Service", link: "/service" },
    //   { title: "Service Details", link: "/service-details" },
    //   { title: "Team", link: "/team" },
    //   { title: "Team Details", link: "/team-details" },
    //   { title: "Shop-Sidebar", link: "/shop-sidebar" },
    //   { title: "Shop 4 Column", link: "/shop-4" },
    //   { title: "Checkout", link: "/checkout" },
    //   { title: "Shop Details", link: "/shop-details" },
    //   { title: "Blog", link: "/blog" },
    //   { title: "Blog Details", link: "/blog-details" },
    //   { title: "Faq", link: "/faq" },
    //   { title: "Pricing", link: "/pricing" },
    //   { title: "Cart", link: "/cart" },
    //   { title: "Terms & Conditions", link: "/terms-conditions" },
    //   { title: "Privacy & Policy", link: "/policy-privacy" },
    //   { title: "Contact", link: "/contact" },
    //   { title: "Login", link: "/login" },
    //   { title: "Register", link: "/register" },
    //   { title: "404", link: "/404" },
    // ],
    submenus:[],
  }
];

export default menu_data;
