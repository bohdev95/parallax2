import React, {useEffect, useState} from "react";
import Profile from "../components/profile";
import Details from "../components/details";
import Transactions from "../components/transactions";
import Layouts from "@/layouts/layouts";
import axios from "axios";
import { profileType } from '@/config/config';
import styles from "@/styles/Home.module.css";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  const [profileData, setProfileData] = useState<profileType>();
  useEffect(() => {
    
    axios.get("/api/profile")
    .then(({data}) => {
      setProfileData(data);
    })
  }, []);

  return (
    <Layouts>
      <div className={styles.container}>
        <section>
          {
            profileData?<ParallaxProvider>
              <Profile imageUrl={profileData.photo_url} fullname={profileData.name}/>
              <Details data={profileData}/>
              <Transactions data={profileData}/>
            </ParallaxProvider> : null
          }  
        </section>
        <footer className={styles.footer}>
          <div>xxxx.com 2024</div>
        </footer>
      
      </div>
    </Layouts>
     
    
  );
}
