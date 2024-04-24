import React, {useEffect, useState} from "react";
import Profile from "../components/profile";
import Details from "../components/details";
import Transactions from "../components/transactions";
import Layouts from "@/layouts/layouts";
import axios from "axios";
import { ParallaxProvider } from 'react-scroll-parallax';
import { profileType } from '@/config/config';
import '@/styles/Home.module.css';

export default function Home() {
  const [profileData, setProfileData] = useState<profileType>();
  

  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = "/assets/scripts/main.js";
    script.async = true;

    document.body.appendChild(script);

    axios.get("/api/profile")
    .then(({data}) => {
      setProfileData(data);
    })
  }, []);

  return (
    <Layouts>
      <ParallaxProvider>
        <section className="c-section" data-scroll-section>
          {
            profileData?<>
              <Profile imageUrl={profileData.photo_url} fullname={profileData.name}/>
              <Details data={profileData}/>
              <Transactions data={profileData}/>
            </> : null
          }  
        </section>
        <footer className="c-section" data-scroll-section>
          <span>xxxx.com 2024</span>
        </footer>
      </ParallaxProvider>
    </Layouts>
     
    
  );
}
