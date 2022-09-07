import { Container } from "./InitialPage.js";
import Record from "../components/Record.js";
import Header from "../components/Header.js";
import { IoOpenSharp, IoPencil, IoCard, IoWifi, IoAdd,IoChevronBack } from "react-icons/io5";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";

export default function SelectCategory(){
    const navigate = useNavigate();
    return(
        <Container>
            <Header title={"Categories"} />
            <Link to="/categories/credentials" style={{textDecoration:"none",width:"100%"}}>
                <Record 
                    icon={<IoOpenSharp size={40} color="#2e2f89" />}
                    name={"Credentials"}
                    number={''}
                />
            </Link>
            <Link to="/categories/notes" style={{textDecoration:"none",width:"100%"}}>
                <Record 
                    icon={<IoPencil size={40} color="#2e2f89" />}
                    name={"Safe notes"}
                    number={''}
                />
            </Link>
            <Link to="/categories/cards" style={{textDecoration:"none",width:"100%"}}>
                <Record 
                    icon={<IoCard size={40} color="#2e2f89" />}
                    name={"Cards"}
                    number={''}
                />
            </Link>
            <Link to="/categories/wifipass" style={{textDecoration:"none",width:"100%"}}>
                <Record 
                    icon={<IoWifi size={40} color="#2e2f89" />}
                    name={"Wi-fi passwords"}
                    number={''}
                />
            </Link>
            <Link to="/initialpage" style={{color: "#000000"}}>
                <Return>
                    <IoChevronBack size={24} />
                    <h5>Voltar</h5>
                </Return>
            </Link>
            <div className="adder">
                <IoAdd size={60} />
            </div>
        </Container>
    )
}

export const Return = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 46px;
    left: 30px;
    text-decoration: underline;

    h5{
        margin-left: 10px;
        font-size: 20px;
    }
`

