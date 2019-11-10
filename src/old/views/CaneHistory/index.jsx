import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';
import { PortletContent, Portlet, PortletLabel, PortletHeader } from 'components';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class CaneHistory extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="History">
        <div className={classes.root}>
            
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
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      quam risus pharetra id, malesuada mattis mus parturient
                      feugiat varius quisque hac magnis eget habitasse, inceptos
                      volutpat sem himenaeos nisi primis pulvinar a platea
                      semper. Fames sem pretium habitant hac praesent
                      ullamcorper risus eu, quis dictumst erat pharetra eleifend
                      quam pulvinar sagittis platea, lectus ut sed vivamus
                      mattis congue ligula. Facilisi potenti enim tellus cursus
                      pellentesque auctor lacus semper conubia et vitae, proin
                      lectus netus velit dictum platea nec morbi sem. Torquent
                      montes facilisis ullamcorper nam curabitur lobortis felis
                      conubia, morbi platea blandit nec taciti sollicitudin
                      quisque placerat, laoreet ante pellentesque penatibus
                      praesent fringilla tempus. Aenean aliquam justo sociis
                      tempor non ridiculus auctor inceptos venenatis montes,
                      integer lacinia interdum pharetra euismod sociosqu
                      fringilla habitant porta et quam, dui himenaeos eleifend
                      primis etiam volutpat lectus luctus augue. Vehicula
                      curabitur blandit placerat eu netus nisl, metus facilisis
                      odio tellus lacus habitant parturient, posuere litora
                      mattis quam massa. Porttitor suspendisse class condimentum
                      potenti duis cras dapibus integer at orci netus, proin
                      accumsan justo felis varius vehicula auctor fermentum ac
                      torquent, id egestas eget nibh consequat convallis
                      venenatis purus massa aliquam. Nascetur curae volutpat
                      facilisi urna sem vestibulum mollis cras, pellentesque in
                      ultricies et nisi condimentum augue molestie, magnis
                      quisque scelerisque cubilia torquent congue habitant.
                      Tellus magna felis justo bibendum dictum malesuada fusce,
                      metus molestie etiam eleifend libero cum auctor iaculis,
                      purus vel tempus ridiculus pharetra nec. At vestibulum
                      rhoncus risus tempus faucibus non duis luctus pretium,
                      donec eleifend natoque ad tincidunt aptent ridiculus
                      porttitor, aenean suspendisse semper nisi posuere dictum
                      praesent himenaeos. Habitant ut convallis ante cursus
                      torquent tempor euismod nulla ornare, habitasse potenti
                      nostra sollicitudin condimentum proin vivamus luctus
                      faucibus semper, ac laoreet suscipit felis imperdiet
                      litora nunc praesent. Ultricies faucibus facilisis tempor
                      dapibus fusce enim phasellus sapien, ullamcorper
                      vestibulum netus interdum platea nibh ad, augue consequat
                      vivamus eleifend morbi fringilla magna.
                  </Typography>
                </PortletContent>
              </Portlet>
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

CaneHistory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CaneHistory);
