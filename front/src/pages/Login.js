import lock from "../assets/lock.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login(){
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
                <button type="submit">Login</button>
            </form>
            <div className="line"></div>
            <Link to="/register" style={{textDecorationColor:"#2e2f89"}}>
                <h2>First access? create your account!</h2>
            </Link> 
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
        width: 100%;

        input{
            margin-bottom: 20px;
            width: 60%;
            height: 60px;
            border-radius: 12px;
            border: 4px solid #2e2f89;
            padding: 6px;

            &::placeholder{
                font-size: 20px;
                color: #2e2f89;
            }
        }

        button{
            width: 60%;
            height: 60px;
            background-color: #2e2f89;
            color: #98ff98;
            border: none;
            border-radius: 50%;
            box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);

            font-size: 26px;
            margin-top: 20px;
        }
    }

    img{
        width: 120px;
        height: 120px;
        object-fit: cover;
        margin-top: 10vh;
    }

    h1{
        font-size: 36px;
        margin-top: 20px;
        color: #2e2f89;
    }

    .line{
        border: 1px solid #DBDBDB;
        width: 90%;
        margin-top: 100px;
    }

    h2{
        font-size: 18px;
        margin-top: 38px;
        color: #2e2f89;
    }
`