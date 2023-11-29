import Link from 'next/link';
import React from 'react';

const Tags = () => {
    return (
        <div className="widget fm-widget widget-category   mb-40">
        <h4 className="fm-widget-heading-1-6 mb-20">Tags</h4>
        <div className="tagcloud">
          <Link href="/movie">Action</Link>
          <Link href="/movie">Cinema</Link>
          <Link href="/movie">Affection</Link>
          <Link href="/movie">Love</Link>
          <Link href="/movie">Emotion</Link>
          <Link href="/movie">Telefilm</Link>
          <Link href="/movie">Hard</Link>
          <Link href="/movie">Romance</Link>
          <Link href="/movie">Empress</Link>
          <Link href="/movie">Bride</Link>
        </div>
      </div>
    );
};

export default Tags;