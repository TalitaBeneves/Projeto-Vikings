import React from 'react';

import Bjorn from '../../video/Bjorn.m4v';
import Ivar from '../../video/Ivar.m4v';
import Floki from '../../video/Floki.m4v';
import Lagertha from '../../video/Lagertha.m4v';

import './trailer.css';

const Trailer = () => {
  return (
    <>
    <h1>Trailers</h1>
    <div className="container__trailer" id="video1">
      <div className="trailer_video">
        <video controls src={Bjorn} type='video/mp4' />
        <video controls src={Ivar} type='video/mp4' />
        <video controls src={Floki} type='video/mp4' />
        <video controls src={Lagertha} type='video/mp4' />
      </div>
    </div>
  </>
  );
}

export default Trailer;
