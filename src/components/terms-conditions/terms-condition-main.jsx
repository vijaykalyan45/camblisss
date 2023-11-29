import Link from "next/link";
import React from "react";

const TermsConditionMain = () => {
  return (
    <section className="terms_conditions_section section_space_lg pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ul
              className="nav tabs_nav_boxed unordered_list_block mb-60"
              role="tablist"
            >
              <li role="presentation">
                <button
                  data-bs-toggle="tab"
                  data-bs-target="#tab_privacy_policy"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i className="fas fa-circle"></i>

                  <span>Privacy & Policy</span>
                </button>
              </li>
              <li role="presentation">
                <button
                  className="active"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_terms_conditions"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fas fa-circle"></i>
                  <span>Terms & Conditions</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content mb-60">
              <div
                className="tab-pane fade"
                id="tab_privacy_policy"
                role="tabpanel"
              >
                <div className="terms_conditions_content">
                  <h3 className="warpper_title">Privacy Policy Agreement</h3>
                  <p>
                    Companies or websites that handle customer information are
                    required by law and third parties to publish their Privacy
                    Policies on their business websites. If you own a website,
                    web app, mobile app or that collects or processes user data,
                    you most certainly will have to post a Privacy Policy on
                    your website (or give in-app access to the full Privacy
                    Policy agreement).
                  </p>
                  <h4 className="info_title">
                    Here are some of the main reasons:
                  </h4>
                  <ul className="icon_list unordered_list_block">
                  <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                        Performance and Speed 
                        </strong>
                        :  React and Next.js utilize
                        server-side rendering (SSR) and client-side rendering
                        (CSR) techniques, leading to faster load times and
                        improved user experiences. This is crucial for a film
                        production website that often includes media-rich
                        content like videos and images.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                          SEO Benefits
                        </strong>
                        : Server-side rendering in Next.js can improve search engine optimization (SEO) by delivering pre-rendered content to search engines. This helps search engines index your site more effectively, leading to better visibility in search results.
                      </span>
                    </li>
                  
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                          State Management
                        </strong>
                        : React provides efficient state management through tools like Redux or {`React's`} built-in Context API. This is helpful for managing complex data such as film details, user preferences, and interactive elements.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                        User Experience
                        </strong>
                        : React allows you to create interactive and dynamic user interfaces, enhancing the overall user experience on your film production website. This can be particularly useful for creating engaging film galleries, interactive timelines, and more.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                          Responsive Design
                        </strong>
                        : Ensures a seamless experience across various devices.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          Modern Technologies
                        </strong>
                        : Benefits of React, Next.js.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        {`Let's`} take a look at each of these reasons in more
                        depth.
                      </span>
                    </li>
                  </ul>

                  <h4 className="info_title">What we collect</h4>
                  <p>
                    As a provider of the
                    {` "CAMBLISS PRIVATE LIMITED,"`}{" "}
                    you may collect and{" "}
                    <Link className="link" href="/faq">
                      Google require website
                    </Link>{" "}
                    certain information from users who interact with your
                    platform. The specific types of information you collect can
                    vary based on the features and functionalities of your
                    template. However, here are some common types of information
                    that might be collected:
                  </p>
                  <p>
                    Some of the most popular third party services require
                    website and app owners to post Privacy Policy agreements on
                    their websites. Some of these services include:
                  </p>

                  <h4 className="info_title">
                    Questions, comments, or report of incidents
                  </h4>
                  <p className="mb-1">
                    You may direct questions, comments or reports to:
                  </p>
                  <p>
                    <Link
                      className="author_mail"
                      href="contact@camblissstudio.com"
                    >
                      contact@camblissstudio.com
                    </Link>
                  </p>
                  <h4 className="info_title">
                    Revisions to this privacy policy without notice
                  </h4>
                  <p className="mb-0">
                    This Privacy Policy is dynamic. It will continually change.
                    You may not assume that it remains the same and you agree to
                    check the policy each time you visit the site for changes.
                    Unless, in the sole opinion of the website, this policy
                    changes so drastically as to suggest a posted notification
                    on the site or via email, you will receive no notification
                    of changes to this Privacy Policy nor, under any
                    circumstances, does this site promise notification. Your
                    continued use of this site always evidences your acceptance
                    of the terms this Privacy Policy or any modifications.
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                id="tab_terms_conditions"
                role="tabpanel"
              >
                <div className="terms_conditions_content">
                  <h3 className="warpper_title">
                    Terms and Conditions Agreement
                  </h3>
                  <p>
                  These Terms and Conditions <strong>Agreement</strong> outline the terms of use and conditions for Cambliss Subscription. By subscribing to our services, you agree to abide by these terms. Please read this Agreement carefully before proceeding.


                  </p>
                  
                  {/* <h4 className="info_title">
                    Here are some of the main reasons:
                  </h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          Abusive users
                        </strong>
                        : Terms and Conditions agreements allow you to establish
                        what constitutes appropriate activity on your site or
                        app, empowering you to remove abusive users and content
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          Intellectual property theft
                        </strong>
                        : Asserting your claim to the creative assets of your
                        site in your terms and conditions will prevent ownership
                        disputes and copyright infringement.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          Potential litigation:
                        </strong>{" "}
                        If a user lodges a legal complaint against your
                        business, showing that they were presented with clear
                        terms and conditions before they used your site will
                        help you immensely in court.
                      </span>
                    </li>
                  </ul>
                  <h4 className="info_title">To Set Liabilities Limits</h4>
                  <p>
                    Almost every terms and conditions agreement has a warranty
                    or limitations of liability disclaimer. We’ll cover it in
                    more detail in our section about{" "}
                    <Link className="link" href="/policy-privacy">
                      what clauses to include in your terms and conditions
                    </Link>
                    , but this clause essentially limits what customers can hold
                    you liable for.
                  </p> */}

                  <h4 className="info_title">
                    Most companies restrict liability for:
                  </h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_text">
                      1. Subscription and Demo Period
Cambliss Subscription offers a demo period during which customers can explore our services and evaluate their suitability. This demo period is provided as a free trial, allowing customers to experience the features and benefits of our subscription. Please note that the duration of the demo period will be clearly communicated.

                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                      2. No Refunds
Once the demo period is over and you have subscribed to our services, refunds will not be issued. We recommend utilizing the demo period to thoroughly evaluate our services and make an informed decision. By subscribing to Cambliss Subscription, you acknowledge and agree that no refunds will be provided for any subscription fees paid.

                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                      3. Service Availability and Limitations
Cambliss Subscription strives to ensure uninterrupted access to our services. However, we cannot guarantee the availability or functionality of our services at all times. Factors beyond our control, such as technical issues or force majeure events, may impact service availability. We will make reasonable efforts to address any disruptions and minimize downtime.

                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                      4. Intellectual Property Rights
All intellectual property rights associated with Cambliss Subscription, including trademarks, logos, and content, are owned by Cambliss or our licensors. You may not use, reproduce, distribute, or modify our intellectual property without explicit written permission from Cambliss.

                      </span>
                    </li>
                    <li>
                    <span className="list_item_text">
                    5. Data Security and Privacy
We take data security and privacy seriously. We employ industry-standard security measures to protect your personal information and ensure its confidentiality. For more details on how we handle your data, please refer to our Privacy Policy.


                      </span>
                    </li>
                    <li>
                    <span className="list_item_text">
                    6. User Responsibilities
As a subscriber to Cambliss Subscription, you are responsible for maintaining the security and confidentiality of your account credentials. You agree not to share your login information with third parties and to promptly notify us in case of any unauthorized access or suspected security breach.


                      </span>
                    </li>
                    <li>
                    <span className="list_item_text">
                    7. Termination
Cambliss Subscription reserves the right to terminate your subscription and access to our services in the event of any breach of this Agreement or violation of our terms of service. We also reserve the right to modify or discontinue our services at any time without prior notice.


                      </span>
                    </li>
                    <li>
                    <span className="list_item_text">
                    8. Limitation of Liability
Cambliss Subscription and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to the use or inability to use our services, even if advised of the possibility of such damages. Our liability, if any, shall be limited to the extent permitted by applicable law.


                      </span>
                    </li>
                    <li>
                    <span className="list_item_text">
                    9. Governing Law and Jurisdiction
This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].


                      </span>
                    </li>
                    <li>
                    <span className="list_item_text">
                    By subscribing to Cambliss Subscription, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree with any part of this Agreement, please refrain from subscribing to our services.


                      </span>
                    </li>

                  </ul>

                  {/* <h4 className="info_title">
                    To Outline Policies and Avoid Abusive Behavior
                  </h4>
                  <p className="mb-1">
                    You may direct questions, comments or reports to:
                  </p>
                  <p>
                    <Link
                      className="author_mail"
                      href="mailto:howdy@paradox.com"
                    >
                      howdy@faime.com
                    </Link>
                  </p>
                  <h4 className="info_title">
                    Revisions to this Teams & Condition without Notice
                  </h4>
                  <p className="mb-0">
                    This Privacy Policy is dynamic. It will continually change.
                    You may not assume that it remains the same and you agree to
                    check the policy each time you visit the site for changes.
                    Unless, in the sole opinion of the website, this policy
                    changes so drastically as to suggest a posted notification
                    on the site or via email, you will receive no notification
                    of changes to this Privacy Policy nor, under any
                    circumstances, does this site promise notification. Your
                    continued use of this site always evidences your acceptance
                    of the terms this Privacy Policy or any modifications.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditionMain;
