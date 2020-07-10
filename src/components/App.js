import React from "react";
import Header from "./Header";
import BagControl from "./BagControl";

function App(){
  return ( 
    <React.Fragment>
      <div class="container">
        <Header />
        <BagControl/>
      </div>
    </React.Fragment>
  );
}

export default App;