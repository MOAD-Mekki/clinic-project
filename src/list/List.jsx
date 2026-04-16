import './List.css'
import Card from './Card';
import { useState , useEffect } from 'react';

export default function List(){
    const [users , setUsers] = useState([]);

    useEffect( ()=>{

        async function fetcher() {
        let res = await fetch("http://localhost:30001/users");
        
        
        const data = await res.json();

        setUsers(data);
    }

    fetcher();
    }
    ,[]);

    

    return (
  <div className='container2'>
    <div className='title2'>
      <h1>Passions List</h1>
    </div> 
    <div className='cards2'>
      {
        users.map((user, index) => {
          return (
            <div key={index}>
              <Card 
                name={user.name} 
                city={user.city} 
                age={user.age} 
              />
            </div>
          );
        })
      }
    </div>
  </div>
);

}