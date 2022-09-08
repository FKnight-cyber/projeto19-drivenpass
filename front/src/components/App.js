import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import GlobalStyle from "../themes/globalStyles.js";
import InitialPage from "../pages/InitialPage.js";
import SelectCategory from "../pages/SelectCategory.js";
import CreateCredential from "../pages/CreateCredential.js";
import CreateCard from "../pages/CreateCard.js";
import CreateNote from "../pages/CreateNote.js";
import CreateWifi from "../pages/CreateWifi.js";
import UserContext from "../contexts/UserContext.js";
import MyCredentials from "../pages/MyCredentials.js";
import MyCredential from "../pages/MyCredential.js";
import MySafeNotes from "../pages/MySafeNotes.js";
import MySafeNote from "../pages/MySafeNote.js";
import MyCard from "../pages/MyCard.js";
import MyCards from "../pages/MyCards.js";
import MyWifi from "../pages/MyWifi.js";
import MyWifis from "../pages/MyWifis.js";
import { useState } from "react";

export default function App(){

  const [credentials,setCredentials] = useState([]);
  const [safenotes,setSafeNotes] = useState([]);
  const [cards,setCards] = useState([]);
  const [wifis,setWifis] = useState([]);
  const [token,setToken] = useState(localStorage.getItem("authToken"));

  const userContext = {
    token,
    setToken,
    credentials,
    setCredentials,
    cards,
    setCards,
    safenotes,
    setSafeNotes,
    wifis,
    setWifis
  };

  return(
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={userContext}>
        <Routes>
          <Route path="/" element={<Login /> }/>
          <Route path="/register" element={<Register /> }/>
          <Route path="/initialpage" element={<InitialPage /> }/>
          <Route path="/categories" element={<SelectCategory /> }/>
          <Route path="/categories/credentials" element={<CreateCredential /> }/>
          <Route path="/categories/cards" element={<CreateCard /> }/>
          <Route path="/categories/notes" element={<CreateNote /> }/>
          <Route path="/categories/wifipass" element={<CreateWifi /> }/>
          <Route path="/my/credentials" element={<MyCredentials /> }/>
          <Route path="/my/credentials/:id" element={<MyCredential /> }/>
          <Route path="/my/notes" element={<MySafeNotes /> }/>
          <Route path="/my/notes/:id" element={<MySafeNote /> }/>
          <Route path="/my/cards" element={<MyCards /> }/>
          <Route path="/my/cards/:id" element={<MyCard /> }/>
          <Route path="/my/wifis" element={<MyWifis /> }/>
          <Route path="/my/wifis/:id" element={<MyWifi /> }/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}
