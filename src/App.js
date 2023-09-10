
import { useEffect, useRef, useState } from 'react';
import './App.css';
import checkServerStatus from './Service/Network';
import { getAllUsers } from './Service/Network';
import { getAllIbm } from './Service/Network';
import { getAllGoogle } from './Service/Network';
import { getUserById } from './Service/Network';
import { getGoogleById } from './Service/Network';
import { getIbmById } from './Service/Network';
import { verifyUsersById } from './Service/Network';
import { lunchUsersById } from './Service/Network';
import { verifyGoogleById } from './Service/Network';
import { verifyIbmById } from './Service/Network';
import UserList from "./components/UserList"
import WorkShop from './components/Workshop';
import Verify from './components/Verify';
function App() {
  let online = false;
  
  checkServerStatus().then((status) => {
    online=status;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
  
const [userdata,setuserdata]=useState(undefined);
let [googledata,setGoogledata] = useState(undefined);
let [ibmdata,setIbmdata]=useState(undefined);
let [singleuser,setsingluser] = useState(undefined);
let singlegoogle = undefined;
let singleibm = undefined;
let verfiyuser = undefined;
let lunchuser = undefined;
let verfiyibm = undefined;
let verfiygoogle = undefined;

useEffect(()=>{
  async function getusers() {
    try {
      const userData = await getAllUsers();
      setuserdata( userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getgoogle() {
    try {
      const userData = await getAllGoogle();
      setGoogledata(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  async function getibm() {
    try {
      const userData = await getAllIbm();
      setIbmdata( userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  getibm()
  getgoogle()
  getusers()
},[])
const Inputdata= useRef(null)

  async function getgoogle() {
    try {
      const userData = await getAllGoogle();
      googledata=userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getibm() {
    try {
      const userData = await getAllIbm();
      ibmdata=userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const getsingluser =async () => {
    const userId= Inputdata.current.value;
    try {
      const userData = await getUserById(userId);
      if (userData===undefined)
      {
        alert("user not found")
        setsingluser(undefined)
      }
      else{
       // alert("user not found")
        setsingluser(userData);
      }
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getsingleIbm() {
    try {
      const userId= Inputdata.current.value;
      const userData = await getIbmById(userId);
      singleibm = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getsingleGoogle(userId) {
    try {
      const userId= Inputdata.current.value;
      const userData = await getGoogleById(userId);
      setsingluser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const verfiyUser =async () => {
    const userId =Inputdata.current.value;
    try {
      const userData = await verifyUsersById(userId);
      setsingluser( userData );
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function lunchUser(userId) {
    try {
      const userData = await lunchUsersById(userId);
      lunchuser = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function verfiyGoogle(userId) {
    try {
      const userData = await verifyGoogleById(userId);
      verfiygoogle = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function verfiyIbm(userId) {
    try {
      const userData = await verifyIbmById(userId);
      verfiyibm = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

 
 // getusers()
  // getgoogle()
  // getibm()
 // getsingluser("0001")
  // getsingleIbm("0001")
  // getsingleGoogle("0001")
  // verfiyUser("0002")
  // lunchUser("0003")
  // verfiyGoogle("0001")
  // verfiyIbm("0001")
  
  setTimeout(() => {
    console.log(online)
    console.log({user:userdata})
    console.log({google:googledata})
    console.log({ibm: ibmdata})
    console.log({singleuser:singleuser})
    console.log({singlegoogle:singlegoogle})
    console.log({singleibm:singleibm})
    console.log({verfiyuser:verfiyuser})
    console.log({verfiygoogle:verfiygoogle})
    console.log({verfiyibm:verfiyibm})
    console.log({lunchuser:lunchuser})
  }, 1000); 
  const search= () => { console.log("vimal")}
  
  return (
    <>
     {/* <UserList userdata={userdata}></UserList> */}
     <Verify search={getsingluser} data={singleuser} refdata={Inputdata}  verifyfunction={verfiyUser}></Verify>
     {/* <WorkShop data={ibmdata}></WorkShop> */}
    </>
  );
}



export default App;