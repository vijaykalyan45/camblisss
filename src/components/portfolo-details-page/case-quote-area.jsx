import BlogQuote from '@svg/blog-quote';
import React from 'react';

const CaseQouteArea = () => {
  return (
    <section className="case-quote-area pt-70 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-12">
            <div className="blockquote-wrapper wow fadeInUp" data-wow-delay="0.3s">
              <BlogQuote />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseQouteArea;