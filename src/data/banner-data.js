//banner-img
import bannerImgOne from '@assets/img/slider/award1.png';
import bannerImgTwo from '@assets/img/slider/award2.png';
import bannerImgThere from '@assets/img/slider/award3.png';
//bg-img-home-one
import bgImageOne from '@assets/img/slider/director.jpg';
import bgImageTwo from '@assets/img/slider/director1.jpg';
import bgImageThere from '@assets/img/slider/director2.jpg';
//bg-img-home-four
import bgImageFour from '@assets/img/slider/home-5/slider-1.jpg';
import bgImageFive from '@assets/img/slider/home-5/slider-4.jpg';
import bgImageSix from '@assets/img/slider/home-5/slider-2.jpg';
import bgImageSeven from '@assets/img/slider/home-5/slider-3.jpg';



const SliderItem = [
    //home-one
    {
        id: 1,
        images: [
            { id: 1, image: bannerImgOne },
            { id: 2, image: bannerImgTwo },
            { id: 3, image: bannerImgThere }
        ],
        sliderBg: bgImageOne,
        sliderTitle: <>DIGITAL IMMERSIVE EXPERIENCE <br /></>,
        sliderSubtitle: "WE CREATE",
        description: 'In the age of digital transformation, harness the power of your bussiness ideas by transforming them into smart digital products',
        sliderbtn: 'Contact Me'
    },
    
   
    //home-4
   
    
    
    
]
export default SliderItem;

