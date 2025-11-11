import Helloworld from "./classcomp";
import Hello from "./funcomp";
import Profile from "./Profile";
import Welcome from "./styles1";
import Welcome1 from "./styles2";
import Welcome2 from "./styles3";
import MuiComp from "./Muicomp";
import Themes from "./custthemes"
function App()
{
  return(
    <div>
      <Helloworld />
      <Hello />
      <Profile />
      <Welcome />
      <Welcome1 />
      <Welcome2 />
      <MuiComp />
      <Themes />
    </div>
  );
}
export default App;