import { useEffect, useState } from "react";
import { Box, Button,  IconButton,  Paper,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { getAuth, signOut } from "firebase/auth";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Axios from 'axios';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { saveAs } from 'file-saver';
import { generatePdf, generatePdf2, generatePdf3, generatePdf4 } from "./pdf";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate= useNavigate();
  const [TotalUsers, setTotalUsers] = useState(0)
  const [TrendingPlace, setTrendingPlace] = useState([])
  const [RecipeTrending, setRecipeTrending] = useState([])
  const [ActiveUser, setActiveUser] = useState([])
  const [Hotels, setHotels] = useState([])
  const [Restuarant, setRestuarant] = useState([])
  const [Attraction, setAttraction] = useState([])
  const [AllRecipes, setAllRecipes] = useState([])
  const [AllUsers, setAllusers] = useState([])
  const [Shop, setShop] = useState([])
function signout(){
  const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      swal('Error',error.message,'error')
    });
}

useEffect(()=>{
  Axios.post("https://traveladvisor.herokuapp.com/api/auth/allusers").then((res)=>{
   console.log(res.data) 
  setTotalUsers(res.data.length)
  setAllusers(res.data)
  })
},[]) 
useEffect(()=>{
  if(AllUsers){
    let active = AllUsers.filter((user)=>user.status=="online")
    setActiveUser(active)
  }
},[AllUsers])
useEffect(()=>{
  
    //const querySnapshot = await getDocs(collection(db, "Shops"));
    Axios.post("https://traveladvisor.herokuapp.com/api/travel/allhotels").then((response)=>{
     let querySnapshot= response.data
     console.log(querySnapshot)
    
     setHotels(response.data)
   //  getAllShops()
  })
  
  
},[])
useEffect(()=>{
  
  //const querySnapshot = await getDocs(collection(db, "Shops"));
  Axios.post("https://traveladvisor.herokuapp.com/api/travel/allrestuarant").then((response)=>{
   let querySnapshot= response.data
   console.log(querySnapshot)
  
   setRestuarant(response.data)
 //  getAllShops()
})


},[])
useEffect(()=>{
  
  //const querySnapshot = await getDocs(collection(db, "Shops"));
  Axios.post("https://traveladvisor.herokuapp.com/api/travel/allattraction").then((response)=>{
   let querySnapshot= response.data
   console.log(querySnapshot)
  
   setAttraction(response.data)
 //  getAllShops()
})


},[])
useEffect(()=>{
  var a=Hotels[Hotels.length-1] 
  var b=Restuarant[Restuarant.length-1]
  var c=Attraction[Attraction.length-1]  
  var d = [a,b,c] 
   console.log(d)
   setTrendingPlace(d)
},[Hotels,Restuarant,Attraction])
  // get data
  

  


let Closer=[]
function CLN(){
  //console.log("Running")
  const getTo = ()=>{
    for (let i = 0; i < 5; i++) {
      const element = Shop[i];
      Closer.push(Shop[i])
    }
    return Closer
}
let C=getTo();
console.log(C)
  Axios.post('http://localhost:3001/create-pdf', C)
  .then(()=> Axios.get('http://localhost:3001/fetch-pdf', { responseType: 'blob' }))
  .then((res) => {
    const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    saveAs(pdfBlob, 'AllShopsReport.pdf');
  })
}





let count =0
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={signout}
          >
            
            Logout
          </Button>
          
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{cursor:"pointer"}}
          onClick={()=>generatePdf(AllUsers)}
        >
          <StatBox
            title={TotalUsers}
            subtitle="Total Users"
           
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{cursor:"pointer"}}
          onClick={()=>generatePdf2(Restuarant)}
        >
          <StatBox
            title={Restuarant.length}
            subtitle="Visited Restuarent"
           
            icon={
              <AddBusinessIcon
                sx={{ color: colors.greenAccent[800], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{cursor:"pointer"}}
          onClick={()=>generatePdf3(Hotels)}
        >
          <StatBox
  
            title={Hotels.length}
            subtitle="Visited Hotels"
           
            icon={
              <ContactsOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
       
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{cursor:"pointer"}}
          onClick={()=>generatePdf4(Attraction)}
        >
          <StatBox
            title={Attraction.length}
            subtitle="Visited Attractions"
            
            icon={
              <ReceiptOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Trending Places
            </Typography>
          </Box>
          {TrendingPlace.map((transaction, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
           
              <Box color={colors.grey[100]}  display="flex"
              justifyContent="left"
              alignItems="center"><Box sx={{mr:"5px"}}><HomeWorkIcon/> </Box>{transaction?.name}</Box>
           
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                All Users
              </Typography>
             
            </Box>
            <Box>

              <IconButton onClick={()=>generatePdf(AllUsers)}>
                
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Paper>
        
      
        <TableContainer sx={{maxheight:50,height:"280px",overflowY:"scroll",overflowX:"hidden"}} color={colors.primary[400]}  backgroundColor={colors.primary[400]}>
          <Table sx={{minWidth:650,}}  color={colors.primary[400]} aria-label="simple table"  >
            <TableHead>
              <TableRow >
              <TableCell sx={{fontWeight:"Bold"}} >User No.</TableCell>
              <TableCell sx={{fontWeight:"Bold"}} >Username</TableCell>
                <TableCell sx={{fontWeight:"Bold"}}>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {AllUsers.map((row, index) => (
                <TableRow key={row.idstudent}>
                  <TableCell >{count=count+1}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell >{row.email}</TableCell>
                 </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
        </Box>
        {/* ROW 3 */}
      
      
      </Box>
    </Box>
  );
};

export default Dashboard;
