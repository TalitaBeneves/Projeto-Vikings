import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiMoviePlay } from 'react-icons/bi';


import './trailer.css';

const Trailer = () => {
  return (
    <>
    <h2 className="h2_custon">Trailers <br/> <BiCameraMovie /> <BiMoviePlay /></h2>
    <div>
      <div className="trailer_video">

        <iframe className="ifra_trai" src="https://www.youtube.com/embed/PSGgEj8UFkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <iframe  className="ifra_trai" id="iva"  src="https://www.youtube.com/embed/SV74KkHINqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <iframe  className="ifra_trai"  src="https://www.youtube.com/embed/JVA_Y7Gh_Kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <iframe  className="ifra_trai" src="https://www.youtube.com/embed/TUkHWfr-lvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>

      <div className="button__person">
        <Link to="/videos">
          <button>Mais Vídeos</button>
        </Link> 
      </div>  
    </div>
  </>
  );
}

export default Trailer;
