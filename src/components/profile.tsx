import * as React from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';
import styles from "@/styles/Home.module.css";

type Props = {
    imageUrl: string;
    fullname: string;
};

export default function Profile({imageUrl, fullname}: Props) {

    const parallax = useParallax<HTMLDivElement>({
        onProgressChange: (progress) => {
        if (parallax.ref.current) {
            // set progress to CSS variable
            parallax.ref.current.style.setProperty(
            "--progress",
            progress.toString()
            );
        }
        },
    });

    
    return (
        <div className={styles.profile}>
            <div className={styles.profileImage}>
                <img src={`/assets/img/${imageUrl}`} width="100%" alt="image" />
            </div>
            
            <div ref={parallax.ref} className={styles.username}>
                {fullname}               
            </div>
        </div>
    );
}