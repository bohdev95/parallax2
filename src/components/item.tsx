import * as React from 'react';
import { Parallax} from 'react-scroll-parallax';

type Props = {
    title: string;
    data: Array<string>;
  };

export default function Item({title, data}: Props) {
    
    return (
        <Parallax speed={-10}>
            <div className="c-lerp-block">
                <span className="c-lerp-block_index" data-scroll data-scroll-delay="0.2"
                    data-scroll-speed="6" data-scroll-call="dynamicColor" data-scroll-repeat>
                    {title}:
                </span>
                <span className="c-lerp-block_title" data-scroll data-scroll-delay="0.2"
                    data-scroll-speed="6">
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
                </span>
            </div>
        </Parallax>
    );
}