import Image from "next/image";
import Link from "next/link";
import React from "react";
import avaterOne from "@assets/img/shop/avater-1.png";
import avaterTwo from "@assets/img/shop/avater-2.png";

const LatestComments = () => {
  return (
    <div className="latest-comments">
      <ul>
        <li>
          <div className="comments-box">
            <div className="comments-avatar">
              <Image
                src={avaterOne}
                style={{ width: "100%", height: "auto" }}
                alt="image not found"
              />
            </div>
            <div className="comments-text">
              <div className="avatar-name">
                <h5>Siarhei Dzenisenka</h5>
                <span> - 3 months ago </span>
              </div>
              <div className="user-rating">
                <ul>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for{" "}
              </p>
              <Link className="reply-2" href="">
                <i className="fas fa-reply"></i>
                Leave Reply
              </Link>
            </div>
          </div>
        </li>

        <li className="children">
          <div className="comments-box">
            <div className="comments-avatar">
              <Image
                src={avaterTwo}
                style={{ width: "100%", height: "auto" }}
                alt="image not found"
              />
            </div>
            <div className="comments-text">
              <div className="avatar-name">
                <h5>Julias Roy</h5>
                <span> - 6 months ago </span>
              </div>
              <div className="user-rating">
                <ul>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for
              </p>
              <Link className="reply-2" href="">
                <i className="fas fa-reply"></i>
                Leave Reply
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LatestComments;
