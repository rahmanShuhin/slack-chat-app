import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import Chat from "./Component/Chaat/Chat";
import Login from "./Component/Login/Login";
import { useStateValue } from "./Component/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login></Login>
        ) : (
          <>
            <Header></Header>
            <div className="app__body">
              <Sidebar></Sidebar>
              <Switch>
                <Route path="/room/:roomId">
                  <Chat></Chat>
                </Route>
                <Route path="/">
                  <h1>welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
