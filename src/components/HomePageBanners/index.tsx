import { DailyWorkout } from '@/helpers/images';
import classes from './HomePageBanners.module.css';
import Image from 'next/image';
const HomePageBanners = () => {
    return ( 
        <div>
            <div className={classes.banner1}>
                <Image src={DailyWorkout.src} alt={'Daily Workout'} height={200} width={200} className={classes.banner1Image}/>
                <div className={classes.smallQuote}>EXERCISE OF THE DAY</div>
                <div className={classes.regularText}>20</div>
                <div className={classes.regularText}>Pacer Steps</div>
                <button className={classes.doneButton}>DONE  + </button>
            </div>
        </div>
    )
}
export default HomePageBanners;