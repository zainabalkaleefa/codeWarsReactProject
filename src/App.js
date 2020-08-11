import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [data, setdata] = useState([]);
   ////////////////////// Get tasks  //////////////////////
   useEffect(() => {
    axios
      // .get('https://api.github.com/users/zainabalkaleefa')
      .get("/api/v1/users/zainabalkaleefa/?access_key=i8J6XHhoBAdVH44bJ3-p")
      .then(//request is successful
        response => {
          const honorNumber = response.data.honor;
          console.log(honorNumber);
          setdata(honorNumber);

        })
      .catch(// an error
        (error) => {
          console.log('Error getting data', error)
        }
      )
      .finally(() => console.log("I am done"))
  }, [setdata]);

  return (
    <div className="background">
     <h1>honor : {data}</h1>
    </div>
  );
}

export default App;

