
import {useState} from "react";
function UserAdd(){
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[email, setEmail] = useState("");

    const CreateUser = async() => {
        console.log(name, age, email);
        const url = "http://localhost:3000/users";
        let response =await fetch(url, {
            method: "post",
            body: JSON.stringify({name, age, email})
        })
        response = await response.json();
        if(response){
            alert ("user added successfully")
        }
    };

    return(
        <div>
            <h2>Add New User</h2>
           <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name" />
           <br /> <br />
         <input onChange={(e)=>setAge(e.target.value)} type="text" placeholder="enter age" />
         <br /> <br />
           <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter email" />
           <br /> <br />
        <button onClick={CreateUser}>Add User</button>
        </div>
    );
}
export default UserAdd;