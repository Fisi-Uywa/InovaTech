import * as React from 'react';
import {
    Card, 
    CardContent, 
    Box, 
    Typography
} 
from '@mui/material';
import { Link } from 'react-router-dom';
import './Charter.css';

const Charter = ({opcion, colorFondo, IconComponent, ruta})=> {
  return (
    <Link to={ruta} style={{textDecoration: 'none'}}>
    <Card sx={{backgroundColor:colorFondo}} className="charter-card">
    <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }}>
          <IconComponent sx={{ fontSize: 150, color: 'white' }} />
        </Box>
      <CardContent className="charter-cardContent">
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"25px", color:"white", fontWeight:"bold", fontFamily:"Arial Black"}}>
            {opcion}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
}
export default Charter;