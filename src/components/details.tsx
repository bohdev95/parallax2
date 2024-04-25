import * as React from 'react';
import { profileType } from '@/config/config';
import Item from './item';
import styles from "@/styles/Home.module.css";

type Props = {
    data: profileType;
};

export default function Details({data}: Props) {
    
    return (
        <div className={styles.details}>
            <Item title="Birthday" data={[data.birthdate]}/>
            <Item title="Birth place" data={[data.place_of_birth]} />
            <Item title="Basic info" data={[data.basic_info]}/>
            <Item title="Favorite drink" data={[data.favorite_drink]}/>
            <Item title="Family" data={[ `spouse: ${data.family.spouse}`, `children: ${data.family.children}`]}/>
            <Item title="Addresses" data={[ `home: ${data.addresses.home}`, `work: ${data.addresses.work}`]}/>
            <Item title="Health record" data={[ `height: ${data.health_record.height}`, `weight: ${data.health_record.weight}`, `conditions: ${data.health_record.conditions}`]}/>
        </div>
    
    );
}