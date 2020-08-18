import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [data, setdata] = useState([]);
  const[name, setName]=useState([]);
   ////////////////////// Get tasks  //////////////////////
   useEffect(() => {
    axios
      // .get('https://api.github.com/users/zainabalkaleefa') // github api
      .get("/api/v1/users/zainabalkaleefa/?access_key=i8J6XHhoBAdVH44bJ3-p")
      .then(//request is successful
        response => {
          const honorNumber = response.data.honor;
          const Name = response.data.name
          console.log(honorNumber);
          setdata(honorNumber);
          setName(Name)

        })
      .catch(// an error
        (error) => {
          console.log('Error getting data', error)
        }
      )
      .finally(() => console.log("I am done"))
  }, [setdata]);

  return (

<div class="card bg-dark text-white">
  <img src="https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/06/10173017/codewars-logo-1.png" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h2 class="card-title" align ="center">zainabalkaleefa</h2>
    <h3 class="card-text" align="center">honor:{data}</h3>
    <h3 class="card-text" align="center">name:{name}</h3>
   
  </div>
</div>
  );
}

export default App;

