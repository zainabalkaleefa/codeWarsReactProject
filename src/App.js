import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setdata] = useState([]);
   ////////////////////// Get tasks  //////////////////////
   useEffect(() => {
    axios
      .get('https://www.codewars.com/api/v1/users/zainabalkaleefa')
      .then(//request is successful
        response => {
          console.log(response.honor);
          const honorNumber = response.data.honor;
          setdata(honorNumber);
        })
      .catch(// an error
        (error) => {
          console.log('Error getting data', error)
        }
      )
      .finally(() => console.log("I am done"))
  }, []);

  return (
    <div className="background">
     {data}
    </div>
  );
}

export default App;
