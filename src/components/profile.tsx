import * as React from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';

type Props = {
    imageUrl: string;
    fullname: string;
};

export default function Profile({imageUrl, fullname}: Props) {
    
    return (
        <Parallax speed={-10} translateY={[-10, 0]}>
            <img id="o-arender-img" src={`/assets/img/${imageUrl}`} width="100%" alt="image" />
            <span id="profile-name" className="c-speed-block_bubble profile-name" data-scroll data-scroll-speed="4"
                data-scroll-call="dynamicColor" data-scroll-repeat>
                {fullname}
               
            </span>
        </Parallax>
    );
}