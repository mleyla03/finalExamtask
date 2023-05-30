import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Style from "./index.module.css"

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 , marginTop:"120px"}}>
      <Grid container  spacing={2} columns={12} style={{display:"flex", width:"80%", margin:"0 auto"}}>
        <Grid  className={Style.homesy} item  lg={4} md={6} sm={12} xs={12}>
        
        <div className={Style.gender}><div className={Style.images}><img  style={{width:"300px", height:"250px"}}src='https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp' alt=''/></div><h2>Women</h2><p>Spring 2018</p></div>
           
        </Grid>
        <Grid  className={Style.homesy} item lg={4} md={6}  sm={12} xs={12}>
        <div className={Style.gender}><div className={Style.images}><img  style={{width:"300px", height:"250px"}}src='https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp' alt=''/></div><h2>Men</h2><p>Spring 2018</p></div>
        </Grid>
        <Grid  className={Style.homesy }item lg={4} md={6}  sm={12} xs={12}>
        <div className={Style.gender}><div className={Style.images}><img  style={{width:"300px", height:"250px"}}src='https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp' alt=''/></div><h2>Accessories</h2><p>Ne Trend</p></div>
        </Grid>
      </Grid>
    </Box>
  );
}