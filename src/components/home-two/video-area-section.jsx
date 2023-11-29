import Image from 'next/image';
import React from 'react';


const VideoAreaSection = () => {
  return (
    <div className="video-area fm-video-style bg-common-black">
      <div className="fm-video-wrapper wow zoomIn" data-wow-delay="0.3s">
        <video loop muted autoPlay playsInline>
          <source src="/assets/video/video-2.mp4" type="video/mp4" />
          <Image src="/public/assets/video/video-2.mp4" width={640} height={360} controls alt='video' />
        </video>
      </div>
    </div>
  );
};

export default VideoAreaSection;