import * as React from 'react';
import { useParallax} from 'react-scroll-parallax';
import styles from "@/styles/Home.module.css";

type Props = {
    title: string;
    data: Array<string>;
  };

export default function Item({title, data}: Props) {

    const parallax = useParallax<HTMLDivElement>({
        easing: [0, 1.34, 0.5, 0.75],
        translateX:[-20, 0]
    });
    
    return (
        
        <div className={styles.item} ref={parallax.ref}>
            <div className={styles.title}>
                {title}:
            </div>
            <div className={styles.content}>
                { data && data.length > 0 ? data.map((o, i) => {
                    if (i > 0){
                        return <div key={i}>
                            <br />
                            { o }
                        </div>
                    } else {
                        return o;
                    }
                    
                }) : ""
                }
            </div>
        </div>
       
    );
}