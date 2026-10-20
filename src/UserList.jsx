
import {useState, useEffect} from "react";
function Userlist() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    GetUserData();
  },[])

  const GetUserData = async ()=>{
    const url = "http://localhost:3000/users";
   let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
     setLoading(false);
    }
  return (
   <div>
<ul className="user-list user-list-head" >
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
      </ul>
{ 
!loading?
  userData.map((user)=>(
   
      <ul className="user-list" key={user.id}>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
      </ul>
  )) : <h2>Data Loading...</h2>
} 
   </div>
  )
}

export default Userlist;

