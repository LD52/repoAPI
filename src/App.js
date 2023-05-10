
import './App.css';
import axios from 'axios';
import  {useEffect, useState} from "react";
import UserList from './UserList'; 


function App() {
    const [actors, setActor] = useState([

     ])

      async function Data() {
        let user = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(user)
        setActor(user.data)
      }

      useEffect( () => {
        Data()
      }, [])


  return (
    <div>
      {actors.map((actor) =>{
        return < UserList actor={actor}/>
      })}
    </div>
    
  );
}

export default App;
