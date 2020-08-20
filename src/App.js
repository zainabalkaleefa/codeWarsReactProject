import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [data, setdata] = useState([]);
  const[name, setName]=useState([]);
  const[userName, setuserName]=useState([]);
  const[rank, setRank]=useState([]);
  const[skill, setSkill]=useState([]);
  const[challenge, setChallenge]=useState([]);
   ////////////////////// Get tasks  //////////////////////
   useEffect(() => {
    axios
      // .get('https://api.github.com/users/zainabalkaleefa') // github api
      // .get("/api/v1/users/zainabalkaleefa/?access_key=i8J6XHhoBAdVH44bJ3-p")
      .get("/api/v1/users/zainabalkaleefa")
      .then(//request is successful
        response => {
          const honorNumber = response.data.honor;
          const Name = response.data.name;
          const UserName = response.data.username;
          const Rank = response.data.ranks.overall.name;
          const Skill = response.data.skills;
          const Challenge = response.data.codeChallenges.totalCompleted;
          console.log(honorNumber);
          setdata(honorNumber);
          setName(Name);
          setRank(Rank);
          setSkill(Skill);
          setChallenge(Challenge);
          setuserName(UserName);

        })
      .catch(// an error
        (error) => {
          console.log('Error getting data', error)
        }
      )
      .finally(() => console.log("I am done"))
  }, [setdata]);

  return (
<div>
         
<div class="card bg-dark text-white">
  <img src="https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/06/10173017/codewars-logo-1.png" className="card-img img" alt="..." style={{height: '100vh'}}/>
  <div class="card-img-overlay cardPosition">
          <input
            type="text"
            className="form-control  inputField"
            name="text_name" placeholder=" &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; CodeWars Username"
            style={{ width: "30%", height: "10%" , borderRadius:20}}
            // aria-describedby="inputGroup-sizing-Default"
            // onChange={textChange}
            // value={text} 
            />
       
          <button 
            type="button"
            className="btn btn-danger addField"
            align="center"
            // onClick={addTaskButton}
            style={{ width: "10%" , height: "8%", borderRadius:100}}
          > </button>
     
     
    {/* <h1 class="card-title" align ="center">{userName}</h1>  */}
    <br></br><br></br>
    <h3 class="card-text text firstText" align="left"><b>Name:</b>  &nbsp;&nbsp;{ name}</h3> 
    <h3 class="card-text text" align="left"><b>Honor:</b>  &nbsp;&nbsp;{data}</h3>
    <h3 class="card-text text" align="left"><b>Rank:</b>  &nbsp;&nbsp;{rank}</h3>
    <h3 class="card-text text" align="left"><b>Laguages:</b>  &nbsp;&nbsp;{skill}</h3>
    <h3 class="card-text text" align="left"><b>Completed Challenges:</b>  &nbsp;&nbsp;{challenge}</h3>
   
   
  </div>
</div>
</div>
  );
}

export default App;

