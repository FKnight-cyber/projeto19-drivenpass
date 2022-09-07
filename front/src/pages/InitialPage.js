import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Record from "../components/Record.js";
import { IoOpenSharp, IoPencil, IoCard, IoWifi, IoAdd } from "react-icons/io5";

export default function InitialPage(){
    const navigate = useNavigate();

    return(
        <Container>
            <Header title={"My passwords"} />
            <Record 
            icon={<IoOpenSharp size={40} color="#2e2f89" />}
            name={"Credentials"}
            number={1}
            />
             <Record 
            icon={<IoPencil size={40} color="#2e2f89" />}
            name={"Safe notes"}
            number={20}
            />
             <Record 
            icon={<IoCard size={40} color="#2e2f89" />}
            name={"Cards"}
            number={12}
            />
             <Record 
            icon={<IoWifi size={40} color="#2e2f89" />}
            name={"Wi-fi passwords"}
            number={3}
            />
            <div className="adder" onClick={()=>navigate("/categories")} >
                <IoAdd size={60} />
            </div>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;

    .sub-header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10px;
        width: 100%;
        height: 6vh;
        margin-bottom: 20px;
        background-color: #2e2f89;
        color: #98ff98;
        font-size: 20px;
    }

    .adder{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        background-color: #2e2f89;
        color: #98ff98;
        border-radius: 50%;
        bottom: 30px;
        right: 30px;
    }
`

