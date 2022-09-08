import lock from "../assets/lock.png";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Swal from "sweetalert2";
import Letter from "../components/Loaders/LetterLoader";

export default function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [load,setLoad] = useState(false);

    const { setToken } = useContext(UserContext);

    const navigate = useNavigate();

    function login(event){
        event.preventDefault();
        setLoad(true)

        const body = {
            email,
            password
        }

        const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/sign-in`,body);

        promise.then(res=>{
            localStorage.setItem("authToken",res.data);
            setToken(localStorage.getItem("authToken"));
            setLoad(false);
            navigate("/initialpage");
        });

        promise.catch(Error=>{
            Swal.fire({
                icon: 'error',
                title: 'Invalid Login!',
                text: `${Error.response.data}`,
                confirmButtonColor: "crimson"
              }).then((result)=>{
                if(result.isConfirmed){
                    setLoad(false);
                }
            });
        });
    }

    return(
        <Container>
            <img src={lock} alt="" srcset="" />
            <h1>DrivenPass</h1>
            {
                load ?
                <Letter />
                    :
                <form onSubmit={login}>
                    <input type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
                    <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required />
                    <button type="submit">Login</button>
                </form>
            }
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

            &:hover{
                cursor: pointer;
            }
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