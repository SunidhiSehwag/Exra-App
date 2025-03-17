import Image from 'next/image'

import { ExraLogo } from '@/helpers/images';

import classes from './Header.module.css';

const Header=()=>{
    return(
        <div className={classes.header}>
            <Image src={ExraLogo.src} 
                alt='ExraLogo' 
                height={60} 
                width={60} 
                className={classes.exraLogo}
            />
                <ul className={classes.headerList}>
                    <li>Full Body</li>
                    <li>Couple Workout</li>
                    <li>Stretching</li>
                    <li>Strengthening</li>
                </ul>
            <button className={classes.startButton}>
                Start Now
            </button>
        </div>
    )
}
export default Header;