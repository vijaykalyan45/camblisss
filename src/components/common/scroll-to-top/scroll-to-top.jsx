import React, { useEffect } from "react";
import BackToTop from "@lib/back-to-top";

function BackToTopCom({ className }) {
  useEffect(() => {
    BackToTop(".scroll-top");
  },[]);
  return (
    <button id="scroll_top" className="scroll-top">
    <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}

export default BackToTopCom;
