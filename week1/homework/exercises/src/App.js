import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HobbyList from "./ExtremeHobbies";
import Guarantee from "./CustomerService";
import Counter from "./Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HobbyList />
        <div class="block-guarantee">
          <Guarantee
            img="f-delivery.png"
            title="Free Shipping"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus culpa quibusdam aspernatur id unde "
          />
          <Guarantee
            img="coin.png"
            title="100% Money back"
            description="similique voluptatem repellat dolor, excepturi consectetur sint dolorem modi."
          />
          <Guarantee
            img="chat.png"
            title="Online Support 24/7"
            description="amet consectetur adipisicing elit. Accusamus culpa quibusdam excepturi consectetur sint dolorem modi."
          />
        </div>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
