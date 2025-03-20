import { runningImage } from "@/helpers/images";
import Image from "next/image";
import classes from "./HomePageBigImage.module.css";

const HomePageBigImage = () => {
  return (
    <div className={classes.scroller}>
      <div className={classes.border}></div>
      <div className={classes.sectionHeading}>Start with a Walk Today</div>
      <div className={classes.border}></div>
      <div className={classes.imageContainer}>
        <Image
          src={runningImage.src}
          alt="Zoomable"
          height={900}
          width={900}
          className={classes.zoomImage}
        />
        <div className={classes.imageOverlay}>
          <div>Learn the Benefits of Walking</div>
          <button className={classes.overlayButton}>Read</button>
        </div>
      </div>
    </div>
  );
};

export default HomePageBigImage;
