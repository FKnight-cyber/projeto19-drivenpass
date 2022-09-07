import { useState } from "react";
import { Container } from "./Login";
import lock from "../assets/lock.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";

export default function Register(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return(
        <Container>
            <img src={lock} alt="" srcset="" />
            <h1>DrivenPass</h1>
            <form action="">
                <input type="email"
                placeholder="E-mail"
                onChange={e => setEmail(e.target.value)}
                required />
                <input type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                required />
                <button type="submit">Register</button>
            </form>
            <Exit onClick={()=>navigate("/")}>
                <IoChevronBack />
                Exit
            </Exit>
        </Container>
    )
}

const Exit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60px;
    background-color: #2e2f89;
    color: crimson;
    border: none;
    border-radius: 50%;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);
    margin-top: 20px;

    font-size: 26px;
`