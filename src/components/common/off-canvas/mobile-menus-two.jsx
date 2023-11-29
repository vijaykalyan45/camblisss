import React, { useState } from "react";
import Link from "next/link";
// internal
import menu_data from "@data/menu-data";

const MobileMenusTwo = () => {
  const [subMenu, setSubMenu] = useState("");
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  // openSubMobileMenu
  const openSubMobileMenu = (s_menu) => {
    if (subMenu === s_menu) {
      setSubMenu("");
    } else {
      setSubMenu(s_menu);
    }
  };
  return (
    <ul className="menu-list">
      {menu_data?.map((menu, i) => (
        <React.Fragment key={i}>
          {menu.hasDropdown && !menu.secondaryDropdown  && (
            <li
              className={`menu-item-has-children menu-item" ${
                menu.menuItem ? "menu-item-has-children menu-item" : ""
              }`}
            >
              <Link href={menu.link} className="drop-down">
                {menu.title}
              </Link>
              <button
                type="button"
                className={`mean-expand ${
                  navTitle === menu.title ? "mean-clicked" : ""
                }`}
                onClick={() => openMobileMenu(menu.title)}
              >
                <i
                  className={`bi fal ${
                    navTitle === menu.title ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </button>
              <ul
                className="sub-menu"
                style={{
                  display: navTitle === menu.title ? "block" : "none",
                }}
              >
                {menu.submenus.map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          )}

          {menu?.secondaryDropdown && (
            <li
            className={`menu-item-has-children menu-item" ${
              menu.menuItem ? "menu-item-has-children menu-item" : ""
            }`}
          >
            <Link href={menu.link} className="drop-down">
              {menu.title}
            </Link>
            <button
              type="button"
              className={`mean-expand ${
                navTitle === menu.title ? "mean-clicked" : ""
              }`}
              onClick={() => openMobileMenu(menu.title)}
            >
              <i
                className={`bi fal ${
                  navTitle === menu.title ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </button>
            <ul
              className="sub-menu"
              style={{
                display: navTitle === menu.title ? "block" : "none",
              }}
            >
              {menu.submenus.map((sub, i) => (
                <li key={i}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MobileMenusTwo;
