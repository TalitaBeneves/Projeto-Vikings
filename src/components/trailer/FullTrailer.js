import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiMoviePlay } from 'react-icons/bi';

import './FullTrailer.css';

const FullTrailer = () => {
  return (
    <>
      <h1 className="h1_custon">Trailers <br/> <BiCameraMovie /> <BiMoviePlay /></h1>
      <div className="trailer_video_full">

        <iframe className="ifra_trai" src="https://www.youtube.com/embed/PSGgEj8UFkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <iframe  className="ifra_trai" id="iva"  src="https://www.youtube.com/embed/SV74KkHINqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <iframe  className="ifra_trai"  src="https://www.youtube.com/embed/JVA_Y7Gh_Kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <iframe  className="ifra_trai" src="https://www.youtube.com/embed/TUkHWfr-lvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <iframe className="ifra_trai" width="560" height="315" src="https://www.youtube.com/embed/SvlcYbe6R98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe className="ifra_trai" width="560" height="315" src="https://www.youtube.com/embed/Kb8pp__Vcog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe className="ifra_trai" width="560" height="315" src="https://www.youtube.com/embed/_k2_IBNfaWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe className="ifra_trai" width="560" height="315" src="https://www.youtube.com/embed/SwoAmACC_Hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      </div>

      <div className="trailer_video_button">
        <Link to="/">
          <button>Voltar</button>
        </Link> 
      </div>  
    </>
  );
}

export default FullTrailer;
