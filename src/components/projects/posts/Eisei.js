import React from "react";
import eisei from "./images/eisei.jpeg";
import Typography from "@material-ui/core/Typography";

const Eisei = () => {
  return (
    <article>
      <Typography variant="h5" color="primary">
        Eisei : A space adventure game
      </Typography>
      <div>
        <p>
          The word Eisei means satellite in Japanese, I found this word when
          searching for cool names relating to astrology for naming the game I
          was developing. Eisei is a space shooter adventure game build on top
          of{" "}
          <a
            href="https://www.yoyogames.com/en/gamemaker"
            rel="noopener noreferrer"
            target="_blank"
          >
            Game Maker studio
          </a>{" "}
          . I build this game in 3rd year of my bachelors, the main goal was to
          get myself get better idea on programming and have fun while doing so.
          It helped me get better idea of OOP and get out of my comfort zone and
          deep dive into game engine documents.
        </p>

        <p>The game is available for two platforms:</p>
        <ul>
          <li>
            Windows :{" "}
            <a
              href="https://drive.google.com/file/d/0B1UfqKYnpobyZi1GNzdCNHFCQ0E/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download Link
            </a>
          </li>
          <li>
            Android :{" "}
            <a
              href="https://drive.google.com/file/d/0B1UfqKYnpobyaEdYRkJWSzN1WTg/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download Link
            </a>
          </li>
        </ul>
        <p>
          <img src={eisei} alt="eisei.jpeg" />
          <br />
        </p>
      </div>
    </article>
  );
};

export default Eisei;
