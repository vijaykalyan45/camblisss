import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import ShopDetailsArea from "./shop-details-area";
import HeaderThere from "@layout/headers/header-there";
import useGlobalContext from "@hooks/use-context";
import { useEffect } from "react";
import axios from "axios";

const Shop = ({ id }) => {
  const { setMovie } = useGlobalContext();

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.BASE_URL}movie/all-movie/${id}`)
        .then((res) => {
          setMovie(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [id, setMovie]);

  return (
    <>
      <HeaderThere />
      <main>
        <ShopDetailsArea />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default Shop;
