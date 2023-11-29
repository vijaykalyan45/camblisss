import React from 'react';
import Icon from '@assets/img/new-icon/reel.png'
import videoImgBg from '@assets/img/bg/video/img-1.png'
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';


const VideoSectionFour = () => {
   const [isOpen, setIsOpen] = useState(false)
   const openVideoModal = () => setIsOpen(!isOpen)

   return (
      <>
        <div className="video-area fm-video-style bg-common-black">
      <div className="fm-video-wrapper wow zoomIn" data-wow-delay="0.3s">
        <video loop muted autoPlay playsInline>
          <source src="/assets/video/Sci-Fi animation sample-(1080p).mp4" type="video/mp4" />
          <Image src="/public/assets/video/Sci-Fi animation sample-(1080p).mp4" width={640} height={360} controls alt='video' />
        </video>
      </div>
    </div>
      </>
   );
};

export default VideoSectionFour;