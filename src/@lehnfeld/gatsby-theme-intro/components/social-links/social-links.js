import React from "react"

import OriginalSocialLinks from "@lehnfeld/gatsby-theme-intro/src/components/social-links/social-links"

const SocialLinks = ({social}) => {
  return (
    <div style={{display: "flex"}}>
        <OriginalSocialLinks social={social}/>
        <a 
          href="https://app-entwickler-verzeichnis.de/programmierer/Wolfenb%C3%BCttel/4334-"
          style={{width: "54px", height: "50px", marginLeft: "-15px"}} >
          <img 
            src="aev-btn.png" 
            
          />
        </a>
    </div>
  );
}

export default SocialLinks
