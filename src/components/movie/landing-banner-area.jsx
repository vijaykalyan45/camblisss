import Link from 'next/link';
import React from 'react';
import movieBannerOne from "@assets/img/movie/banner1.jpg";
import movieBannerTwo from "@assets/img/movie/banner2.jpg";
import movieBannerThere from "@assets/img/movie/banner3.jpg";

const LandingBannerArea = () => {
    const LandingBannerData= [{
        id: 1,
        image: movieBannerOne,
        title: <>Super Action <br />Movie</>,
        subText: 'Best Action',
        movieBtn: 'Watch Now',
        delay: '0.3s'
    },
    {
        id: 2,
        image: movieBannerTwo,
        title: <>Kids Cartoon <br />Movie</>,
        subText: 'Kids favorite',
        movieBtn: 'Watch Now',
        delay: '0.4s'
    },
    {
        id: 3,
        image: movieBannerThere,
        title: <>Entertain <br />TV Serial</>,
        subText: 'Romance',
        movieBtn: 'Watch Now',
        delay: '0.5s'
    }]
    return (
        <div className="fm-landing-banner-area bg-common-black section-spacing-bottom">
            <div className="container">
                <div className="row g-5">
                    {
                        LandingBannerData.map((item) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
                                <div className="fm-landing-banner-single fade_bottom_4">
                                    <div className="fm-landing-banner-thumb" style={{ backgroundImage: `url(${item.image.src})` }}></div>
                                    <span className="fm-landing-banner-subtext">{item.subText}</span>
                                    <h4 className="fm-landing-banner-text">{item.title}</h4>
                                    <Link href="/movie" className="fm-landing-banner-button">{item.movieBtn}</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LandingBannerArea;