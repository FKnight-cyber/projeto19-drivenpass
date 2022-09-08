import { useState } from "react";
import { Container } from "./Login";
import lock from "../assets/lock.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import Letter from "../components/Loaders/LetterLoader";

export default function Register(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [load, setLoad] = useState(false);

    function register(event){
        event.preventDefault();
        setLoad(true);

        const body = {
            email,
            password
        }

        const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/sign-up`,body);

        promise.then(()=>{
            let timerInterval
            Swal.fire({
                title: 'Very Well!',
                html: 'Successfully registered!',
                timer: 1600,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    setLoad(false);
                    navigate("/"); 
                }
            })
        });

        promise.catch(Error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${Error.response.data}`,
                confirmButtonColor: "crimson"
              }).then((result)=>{
                if(result.isConfirmed){
                    setLoad(false);
                }
              });
        })
    }

    return(
        <Container>
            <img src={lock} alt="" srcset="" />
            <h1>DrivenPass</h1>
            {
                load ?
                    <Letter />
                :
                <>
                    <form onSubmit={register}>
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
                        <button type="submit">Register</button>
                    </form>
                    <Exit onClick={()=>navigate("/")}>
                        <IoChevronBack />
                        Exit
                    </Exit>
                </>
            }
            
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

    &:hover{
        cursor: pointer;
    }
`