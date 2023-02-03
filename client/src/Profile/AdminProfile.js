import { Box } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from "axios";


const AdminProfile = () => {


const [admin, setAdmin] = useState();

  useEffect(() => {
  // console.log("res")
  getAdminById();

  },[]);
  const getAdminById =  () => {
    const adminId = localStorage.getItem("adminId");

    axios.get(`/admin?id=${adminId}`)
    .then(response =>{
        console.log(response.data.admins.addedMovies);
        setAdmin(response.data.admins);
    })
    .catch(error => {
        console.log(error);
    })

};
  return ( 
     <Box width={"100%"} display="flex">
 <Fragment>
      {" "}
      {admin && (
       <Box
    flexDirection={"column"}
    justifyContent="center"
    alignItems={"center"}
    width={"30%"}
    padding={3}
  >
<AccountCircleIcon sx={{ fontSize: "10rem", textAlign:'center', ml: 3 }}/>


        <Typography
           mt={1}
          padding={1}
          width="auto"
          textAlign={"center"}
          border="1px solid #ccc"
          borderRadius={6}
        >
          Email: {admin.email}
        </Typography>      


  </Box>
      )}
  {admin && admin.addedMovies.length > 0 &&
  (
  <Box width={"70%"} display="flex" flexDirection={"column"}>
  <Typography
          variant="h3"
          fontFamily={"verdana"}
          textAlign="center"
          padding={2}
        >
          Added Movies
        </Typography>
        <Box margin="auto" display="flex" flexDirection={"column"} width="80%">
          <List>
            {
              admin.addedMovies.map((movie, index) => (
                <ListItem
                  sx={{
                    bgcolor: "#00d386",
                    color: "white",
                    textAlign: "center",
                    margin: 1,
                  }}
                
                >
                  <ListItemText
                    sx={{ margin: 1, width: "auto", textAlign: "left" }}
                  >
                    Movie: {movie.title}
                  </ListItemText>
                </ListItem>
              ))}
          </List>
        </Box>

  </Box>
  )}
  </Fragment>
  
  </Box>

   
);  
};

export default AdminProfile;