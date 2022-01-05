import React from "react";
import dockerImage from "./images/docker.jpeg";
import Typography from "@material-ui/core/Typography";

const DockerImage = () => {
  return (
    <article>
      <Typography variant="h5" color="primary">
        Docker Image to run legacy codebase.
      </Typography>
      <div>
        <p>
          The legacy codebase was a mix of core php and yii framework, Mysql as
          database and apache as web server. Whenever using newer version of
          php, the codebase used to show deprecated warnings and some
          functionality stoped working. Also it was a tedious job to setup the
          projects.
        </p>

        <p>
          To overcome such problems, I created docker images to run the project
          and make it easier to the dev team to focus on features. I created two
          images.
          <ul>
            <li>
              First image for consisting the required php version, apache web
              server
            </li>
            <li> second image consisting the Mysql database.</li>
          </ul>
          The container run from these images would communicate with each other
          using docker network and to retain database data a volume was made.
        </p>

        <p>
          <img src={dockerImage} alt="dockerImage.jpeg" />
          <br />
        </p>
      </div>
    </article>
  );
};

export default DockerImage;
