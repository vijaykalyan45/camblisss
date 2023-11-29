
import Logo from '@assets/img/logo/logo.png';
import gallery1 from "@assets/img/logo/gallery1.jpeg";
import gallery2 from "@assets/img/logo/gallery2.png";
import gallery3 from "@assets/img/logo/gallery3.jpeg";
import gallery4 from "@assets/img/logo/gallery4.jpeg";
import gallery5 from "@assets/img/logo/gallery5.jpeg";
import gallery6 from "@assets/img/logo/gallery6.jpeg";


const footerData = {
    description: {
        id: 1,
        logo: Logo,
        description: 'Lorem ipsum dolor amet consectetur adipisicing elit sed do eiusmod',
    },

    gallery: {
        id: 2,
        title: 'Our Gallery',
         galleryData:[
            {
               id:1,
               image:gallery1
            },
            {
               id:2,
               image:gallery2
            },
            {
               id:3,
               image:gallery3
            },
            {
               id:4,
               image:gallery4
            },
            {
               id:5,
               image:gallery5
            },
            {
               id:6,
               image:gallery6
            },
            
         ]
    },

    socialLink: {
        id: 3,
        title:'Follow Me',
        description: 'Connect me with social media',
        socialIcons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/profile.php?id=61553561020127',
            },
            {
                id: 2,
                icon: 'fa-brands fa-twitter',
                url: 'https://twitter.com/',
            },
            {
                id: 3,
                icon: 'fa-brands fa-instagram',
                url: 'https://www.instagram.com/',
            },
            {
                id: 4,
                icon: 'fa-brands fa-pinterest-p',
                url: 'https://www.pinterest.com/',
            },
        ]
    },
    quickLinks: {
        id: 4,
        title: 'Contact Us',
        address: [
            //home-one-data
            {
                id: 1,
                contactInfo: 'https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873',
                contact: 'SURVEY NO: 75/2, BALAPUR, HYDERABAD, TELANGANA, 500005',
                addressWrapperClass:'fa-sharp fa-solid fa-location-dot'
            },
            {
                id: 2,
                contactInfo: 'tel:8309264634',
                contact: '8309264634',
                addressWrapperClass:'fa-sharp fa-solid fa-phone'
            },
            {
                id: 3,
                contactInfo: 'mailto:contact@camblissstudio.com',
                contact: 'contact@camblissstudio.com',
                addressWrapperClass:'fa-sharp fa-solid fa-envelope'
            },
            //home-two-data
            {
                id: 4,
                contactInfo: 'mailto:hello@faimemedia.com',
                contact: 'hello@faimemedia.com',
                contactClass:'contact-mail',
                addressWrapperClass:'fm-contact-mail',
                contactTimeClass:'fm-contact-hours',
                contactTime:'Response within 24hrs'
            },
            {
                id: 5,
                contactInfo: 'tel:915550303420',
                contact: '+91 555 0303 420',
                contactClass:'contact-call',
                addressWrapperClass:'fm-contact-call',
                contactTimeClass:'fm-contact-time',
                contactTime:'Mon - Fri / 9 am - 5:30 pm'
            },

        ]
    },
}
   

export default footerData;