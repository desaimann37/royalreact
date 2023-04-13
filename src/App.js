import "./App.css";

import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import { Content } from "./Components/Content";

function App() {
  
  var title = "React App"
  var payload = "This is Called PayLoad..."
  
  return (
      <div className="App">

        <Header title = {title}/>
        <Content payload = {payload}/>

        <Footer/>
      </div>
    
  );
}

export default App;
