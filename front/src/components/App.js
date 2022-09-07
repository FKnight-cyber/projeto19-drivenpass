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

export default function App(){
  return(
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login /> }/>
        <Route path="/register" element={<Register /> }/>
        <Route path="/initialpage" element={<InitialPage /> }/>
        <Route path="/categories" element={<SelectCategory /> }/>
        <Route path="/categories/credentials" element={<CreateCredential /> }/>
        <Route path="/categories/cards" element={<CreateCard /> }/>
        <Route path="/categories/notes" element={<CreateNote /> }/>
        <Route path="/categories/wifipass" element={<CreateWifi /> }/>
      </Routes>
    </BrowserRouter>
  )
}
