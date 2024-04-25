import React, {useEffect, useState} from "react";
import Profile from "../components/profile";
import Details from "../components/details";
import Transactions from "../components/transactions";
import Layouts from "@/layouts/layouts";
import axios from "axios";
import { ParallaxProvider } from 'react-scroll-parallax';
import { profileType } from '@/config/config';
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [profileData, setProfileData] = useState<profileType>();
  useEffect(() => {
    
    axios.get("/api/profile")
    .then(({data}) => {
      setProfileData(data);
      console.log("data");
    })
  }, []);

  return (
    <Layouts>
      <ParallaxProvider>
        <section>
          {
            profileData?<>
              <Profile imageUrl={profileData.photo_url} fullname={profileData.name}/>
              <Details data={profileData}/>
              <Transactions data={profileData}/>
            </> : null
          }  
        </section>
        <footer className={styles.footer}>
          <span>xxxx.com 2024</span>
        </footer>
      </ParallaxProvider>
    </Layouts>
     
    
  );
}
