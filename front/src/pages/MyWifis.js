import { Container } from "./InitialPage";
import Header from "../components/Header";
import { Return } from "../pages/SelectCategory.js"
import { RecordContainer } from "./MyCredentials";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import Wifis from "../components/Wifis";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function MyWifis(){
    const { wifis } = useContext(UserContext);

    return(
        <Container>
            <Header title={"My networks"} />
            <RecordContainer>
                <Wifis wifis={wifis} />
            </RecordContainer>
            <Link to="/initialpage" style={{color: "#000000"}}>
                <Return>
                    <IoChevronBack size={24} />
                    <h5>Voltar</h5>
                </Return>
            </Link>
        </Container>
    )
}