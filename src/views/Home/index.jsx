import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';
import Carousel from 'nuka-carousel';
import {
  PortletContent,
  Portlet,
  PortletLabel,
  PortletHeader
} from 'components';
import Slide1 from '../../assets/slide1.jpg';
import Slide2 from '../../assets/slide2.jpg';
import Slide3 from '../../assets/slide3.jpg';
import Slide4 from '../../assets/slide4.jpg';
import Slide5 from '../../assets/slide5.jpg';
import Slide6 from '../../assets/slide6.jpg';
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Development of an IWCR">
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={12} sm={12} xl={12} xs={12}>
              <Card>
                <Carousel
                  autoplay
                  heightMode="first"
                  style={{ height: '400px' }}
                >
                  <img src={Slide1} />
                  <img src={Slide2} />
                  <img src={Slide3} />
                  <img src={Slide4} />
                  <img src={Slide5} />
                  <img src={Slide6} />
                </Carousel>
              </Card>
            </Grid>
            <Grid container spacing={4}>
              <Grid item lg={12} sm={12} xl={12} xs={12}>
                <Portlet>
                  <PortletHeader>
                    <PortletLabel
                      subtitle="Just some Info"
                      title="General Information"
                    />
                  </PortletHeader>
                  <PortletContent>
                    <Typography variant="body1">
                      As many countries step into the aging society rapidly,
                      older people are experiencing motor functions deficits or
                      disability of the limbs, which is usually caused by
                      neurological problems or muscle strength
                      deficiencies.(Wakita, Huang, Di, Sekiyama, & Fukuda,
                      2013). Walking is one of the main human activities in
                      everyday life and visually impaired alike, the walker-type
                      rehabilitation robot has become a popular research topic
                      over the last decade. Human being receives information
                      from the environment, 1% by taste, 1.5% by tactile sense,
                      3.5% by smell, 11% by hear and 83% by sight. Artificial
                      vision is the most important part of human physiology as
                      83% of information human being gets from the environment
                      is via sight.(Garcia Ramirez, da Silva, Cinelli, & de
                      Albornoz, 2012). In addition, the population of elderly
                      and visually impaired people are increased to 962 million
                      and 253 million as recorded by (United Nations, Department
                      of Economic and Social Affairs, Population Division, 2017)
                      and (Ackland, Resnikoff, & Bourne, 2018) respectively,
                      which is a significantly enormous number. How to help this
                      population sector to make their daily life more ease is an
                      important question? The use of assistive technology could
                      be one of possible solutions. Furthermore, in
                      industrialized countries, regional disparities in
                      healthcare and welfare services, increased medical expense
                      caused by aging societies and shortages of medical staff
                      have become serious problems. Therefore, there is a great
                      need to develop rehabilitation robots that can partially
                      replace the nurses and the therapists. There have been
                      many smart walker-type robots consisting of active or
                      passive wheels and supporting frame, yet there are still
                      numerous inadequacies in the present walker frameworks. To
                      begin with, numerous walkers are intended for indoor
                      condition. Second, the majority of them are huge in size
                      as well as substantial in weight. Third, in critical
                      condition where an elderly or a visually impaired person
                      wander off and cannot be found. An indoor robot is
                      regularly confined inside constrained places. Huge size
                      makes it difficult to be utilized in limited space and
                      overwhelming weight confines the mobility. Numerous elders
                      and patients are not all that feeble that they must be
                      nursed cautiously. All things considered, adequate
                      support, for example, a stick, is important to assist them
                      with going for a stroll outside, which empowers them to
                      acknowledge top notch lives or quicken the restoration.
                      Unavailability of tracking system on the walker makes it
                      hard to locate the elder ones when they are lost.
                      Therefore, this research proposes to offer a design and
                      construction modification of the existing intelligent
                      walking cane robot (IWCR) to further improve its
                      functionality. The proposed modified IWCR will be embedded
                      with a tracker which will be managed by a web application.
                      The web application will be created with capabilities to
                      manage position and distress signal alert.
                    </Typography>
                  </PortletContent>
                </Portlet>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
