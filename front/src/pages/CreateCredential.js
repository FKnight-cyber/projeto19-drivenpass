import { Container } from "./InitialPage";
import { Return } from "./SelectCategory";
import Header from "../components/Header";
import styled from "styled-components";
import { IoCheckmark, IoChevronBack } from "react-icons/io5"
import { Link } from "react-router-dom";

export default function CreateCredential(){
    return(
        <Container>
            <Header title={"Credentials"} />
            <Form>
                <input type="text"
                    placeholder="Title"
                    required
                 />
                 <input type="text"
                    placeholder="URL"
                    required
                 />
                 <input type="text"
                    placeholder="User"
                    required
                 />
                 <input type="password"
                    placeholder="Password"
                    required
                 />
                 <button type="submit">
                    <IoCheckmark size={50} color="#ffffff" />
                 </button>
            </Form>
            <Link to="/categories" style={{color: "#000000"}}>
                <Return>
                    <IoChevronBack size={24} />
                    <h5>Voltar</h5>
                </Return>
            </Link>
        </Container>
    )
};

export const Form = styled.form`
    width: 90%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;

    input{
        height: 40px;
        border-radius: 12px;
        border: 2px solid #2e2f89;
        padding: 12px;
        font-size: 20px;
        color: #2e2f89;

        &::placeholder{
            color: #2e2f89;
            font-size: 20px;
        }
    }

    button{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        background-color: #98ff98;
        color: #98ff98;
        border-radius: 50%;
        border: none;
        bottom: 30px;
        right: 30px;
    }
`
