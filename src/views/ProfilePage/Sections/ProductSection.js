import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Apartment from "@material-ui/icons/Apartment";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Security from "@material-ui/icons/Security";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            Make sure to avoid including any sensitive information you don't want to share with this business.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Availablity"
              description="We will maintain your project as long as well . Any queries or any clarification you can call at any business time , we reply at correct time."
              icon={Apartment}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Our Products listed below have been evaluated by a third-party technical administrator . In some cases, products from unverified lots may remain in commercial circulation after verification has been achieved or reinstated."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Security"
              description="Sure, Our company has an established reputation of trust. It has strong values, strong prospects, and is consistently hitting revenue goals year over year. Things are looking really good. However, all this means nothing if your firm isn’t taking software security seriously."
              icon={Security}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
