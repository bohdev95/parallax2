import * as React from 'react';
import { Parallax} from 'react-scroll-parallax';
import { profileType } from '@/config/config';
import Item from './item';

type Props = {
    data: profileType;
};

export default function Details({data}: Props) {
    
    return (
        <Parallax speed={-10}>
           <div className="o-info-wrapper d-flex justify-content-center o-layout_item u-3/5@from-medium">
                <div>
                    <Item title="Birthday" data={[data.birthdate]}/>
                    <Item title="Birth place" data={[data.place_of_birth]}/>
                    <Item title="Basic info" data={[data.basic_info]}/>
                    <Item title="Favorite drink" data={[data.favorite_drink]}/>
                    <Item title="Family" data={[ `spouse: ${data.family.spouse}`, `children: ${data.family.children}`]}/>
                    <Item title="Addresses" data={[ `home: ${data.addresses.home}`, `work: ${data.addresses.work}`]}/>
                    <Item title="Health record" data={[ `height: ${data.health_record.height}`, `weight: ${data.health_record.weight}`, `conditions: ${data.health_record.conditions}`]}/>
                </div>
            </div>
        </Parallax>
    );
}