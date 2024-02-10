import React from "react";
import Grid from "@material-ui/core/Grid";
import ImageModal from "../utils/ImageModal";
import EiffelTower from "./img/paris_eiffel_tower.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SaintGermain from "./img/saint-germain-small.jpg";

const ParisBlog = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <div>
            <span className="paris-style">Paris</span>, the capital of France,
            one of the most beautiful city in Europe is famous for its arts &
            culture, some of the most fascinating and well-preserved history,
            some of the best shopping, et cetera et cetera. I moved to Prais in
            September 2023 in pursuit of my Master Degree; so far the journey
            has been amazing.
            <p>
              In this section, I will write about Cool Stuffs in this fabolus
              city based on my personal experiences : wandering, strolling,
              sightseeing, drinking, dining, et cetera.
            </p>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <ImageModal
            imgSrc={EiffelTower}
            imgAlt={"Eiffel Tower"}
            imgWidth="40%"
          />
        </Grid>
      </Grid>

      <img className="img-fluid" src={SaintGermain} alt="saint germain" />

      {/* Paris Categories */}
      <div className="paris">
        <Grid container spacing={3} className="mt-5 p-2">
          <Grid item md={6} sm={12} xs={12}>
            <div className="wrapper">
              <div className="card">
                <div className="card-title px-2">Tourist center</div>
                <div className="fal ">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <div className="wrapper">
              <div className="card">
                <div className="card-title px-2">Stuff to Do</div>
                <div className="fal ">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <div className="wrapper">
              <div className="card">
                <div className="card-title px-2">Secret Gems 💎</div>
                <div className="fal ">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <div className="wrapper">
              <div className="card">
                <div className="card-title px-2">Food and Drink</div>

                <div className="fal ">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </Grid>

          {/* End Categories  */}
        </Grid>
      </div>
    </div>
  );
};

export default ParisBlog;
