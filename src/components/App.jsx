
import Profile from "./Profile/Profile";
import userData from "../userData.json";
import  '../index.css';

const App = () => {
  return (
    <>
<Profile 
image={userData.avatar}
name={userData.username} 
tag={userData.tag}
location={userData.location}
stats={userData.stats}
 />
</>
  );
};

export default App;