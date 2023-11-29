import React from "react";
import image from "@assets/img/portfolio/thumbnail.jpg";
import Image from "next/image";
import useGlobalContext from "@hooks/use-context";

const SidebarContent = () => {
  const { movie } = useGlobalContext();
  return (
    <div className="fm-movie-details-content">
      <div className="fm-movie-details-thumbnail">
        {movie?.image ? (
          <Image
            src={movie?.image}
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
            alt="team"
          />
        ) : (
          <Image
            src={image}
            alt="img not found"
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </div>
      <h3 className="movie-details-name">
        {movie?.title ? movie.title : "The Captain"}
      </h3>
      <div className="fm-movie-details-description">
        <p className="text-cut">
          Superhero duo Scott Lang and Hope Van Dyne, together with Hope’s
          parents Hank Pym and Janet Van Dyne, find themselves exploring the
          Quantum Realm, interacting with strange new creatures, and embarking
          on an adventure that will push them beyond the limits of what they
          thought was possible.
        </p>
      </div>
      <div className="fm-movie-details-info">
        <span>
          <strong>Language</strong> : English
        </span>
        <span>
          <strong>Genere</strong> : Action, Adventure
        </span>
        <span>
          <strong>Cast</strong> : John, Miner, Juliet, Peek, Heyman
        </span>
        <span>
          <strong>Released on</strong> : 27 march 2022
        </span>
        <span>
          <strong>Duration</strong> : 120 m{" "}
        </span>
      </div>
    </div>
  );
};

export default SidebarContent;
