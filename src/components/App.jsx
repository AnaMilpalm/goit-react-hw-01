
import Profile from "./Profile/Profile";
import userData from "../userData.json";


const App = () => {
  return (
    <>
<Profile 
image={userData.avatar}
name={userData.username} 
tag={userData.tag}
stats={userData.stats}
 />
</>
  );
};

export default App;