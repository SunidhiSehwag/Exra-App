import {
  DailyWorkout,
  SittingWorkout,
  StrengthWorkout,
} from "@/helpers/images";

import classes from "./HomePageBanners.module.css";
import Image from "next/image";

const HomePageBanners = () => {
  return (
    <div className={classes.banners}>
      <div className={classes.banner1}>
        <Image
          src={DailyWorkout.src}
          alt={"Daily Workout"}
          height={200}
          width={200}
          className={classes.banner1Image}
        />
        <div className={classes.bannerheading}>EXERCISE OF THE DAY</div>

        <div className={classes.regularText}>20</div>
        <div className={classes.regularText}>Pacer Steps</div>

        <button className={classes.doneButton}>DONE + </button>
      </div>
      <div>
        <div className={classes.banner2}>
          <div>
            <div className={classes.bannerheading}>Break useless streaks</div>
            <div className={classes.regularText}>
              Get a quick work exercise break
            </div>
          </div>
          <Image
            src={SittingWorkout.src}
            alt={"Daily Workout"}
            height={200}
            width={200}
            className={classes.banner1Image}
          />
        </div>
        <div className={classes.banner2}>
          <Image
            src={StrengthWorkout.src}
            alt={"Daily Workout"}
            height={200}
            width={200}
            className={classes.banner1Image}
          />
          <div>
            <div className={classes.bannerheading}>GET THE GYM MUSCLES</div>
            <div className={classes.regularText}>
              Workout to let the muscles shine
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageBanners;
