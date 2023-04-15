import "./App.css";

import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import { Content } from "./Components/Content";
import { Users } from "./Components/Users";

function App() {
  
  var title = "React App"
  var payload = "This is Called PayLoad..."
  
  return (
      <div className="App">

        <Header title = {title}/>
        {/* <Content payload = {payload}/> */}
        <Users/>
        <Footer/>
      </div>
    
  );
}

export default App;
