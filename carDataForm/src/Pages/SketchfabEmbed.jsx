import React from 'react';

const SketchfabEmbed = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Mercedes-Benz CLS [w219]"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/3b11611c6d06415b82b96495f5f249ce/embed"
      ></iframe>
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/mercedes-benz-cls-w219-3b11611c6d06415b82b96495f5f249ce?utm_medium=embed&utm_campaign=share-popup&utm_content=3b11611c6d06415b82b96495f5f249ce"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
        </a>{' '}
        <a
          href="https://sketchfab.com/BlackSnow02?utm_medium=embed&utm_campaign=share-popup&utm_content=3b11611c6d06415b82b96495f5f249ce"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
        </a>{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3b11611c6d06415b82b96495f5f249ce"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
        </a>
      </p>
    </div>
  );
};

export default SketchfabEmbed;
