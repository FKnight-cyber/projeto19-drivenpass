import { Container } from "./InitialPage";
import Header from "../components/Header";
import { Return } from "../pages/SelectCategory.js"
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import Credentials from "../components/Credentials";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";

export default function MyCredentials(){
    const { credentials } = useContext(UserContext);

    return(
        <Container>
            <Header title={"My credentials"} />
            <RecordContainer>
                <Credentials credentials={credentials} />
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

export const RecordContainer = styled.div`
    width: 100%;
    height: 60vh;
    overflow-y: scroll;
`