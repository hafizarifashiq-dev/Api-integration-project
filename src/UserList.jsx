
import {useState, useEffect} from "react";
function Userlist() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
      const url = "http://localhost:3000/users";

  useEffect(()=>{
    setLoading(true);
    GetUserData();
  },[])

  const GetUserData = async ()=>{
   let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
     setLoading(false);
    }

     const DeleteUser = async(id)=>{
        console.log(id);
        let response =await fetch (url + "/"+id, {
            method: "delete"
        });
        response = await response.json();
        if(response){
            alert("user record deleted");
            GetUserData();
        }
    }

  return (
   <div>
<ul className="user-list user-list-head" >
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>
{ 
!loading?
  userData.map((user)=>(
   
      <ul className="user-list" key={user.id}>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
        <li><button onClick={()=>DeleteUser(user.id)}>Delete</button></li>
      </ul>
  )) : <h2>Data Loading...</h2>
} 
   </div>
  )
}

export default Userlist;

