import { Container } from "./InitialPage";
import { Return } from "./SelectCategory";
import Header from "../components/Header";
import styled from "styled-components";
import { IoCheckmark, IoChevronBack } from "react-icons/io5"
import { Link,useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useState,useContext } from "react";
import Swal from "sweetalert2";
import Letter from "../components/Loaders/LetterLoader";

export default function CreateCredential(){
    const [title,setTitle] = useState('');
    const [url,setUrl] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [load,setLoad] = useState('');

    const navigate = useNavigate();

    const { token } = useContext(UserContext);

    function createCredential(event){
        event.preventDefault();
        setLoad(true);

        const body = {
            title,
            url,
            username,
            password
        }

        const promise = 
        axios.post(`${process.env.REACT_APP_BASE_URL}/categories/credentials/create`
        ,body,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(()=>{
            let timerInterval
            Swal.fire({
                title: 'Credential record added!',
                html: 'Successfully registered!',
                timer: 1000,
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
                    navigate("/initialpage"); 
                }
            })
        });

        promise.catch(Error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
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
            <Header title={"Credentials"} />
            {
                load ? <Letter />
                :
                <>
                    <Form onSubmit={createCredential}>
                        <input type="text"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                        <input type="text"
                            placeholder="URL"
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                            required
                        />
                        <input type="text"
                            placeholder="User"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                        <input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
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
                </>
            }
        </Container>
    )
};

export const Form = styled.form`
    width: 90%;
    height: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    overflow-y: scroll;

    h1{
        color: #2e2f89;
        margin-bottom: 6px;
        font-size: 20px;
    }

    input{
        height: 40px;
        border-radius: 12px;
        border: 2px solid #2e2f89;
        padding: 12px;
        font-size: 20px;
        color: #2e2f89;
        margin-bottom: 26px;

        &::placeholder{
            color: #2e2f89;
            font-size: 20px;
        }
    }

    textarea{
        height:50vh;
        border-radius: 12px;
        border: 2px solid #2e2f89;
        padding: 12px;
        font-size: 20px;
        color: #2e2f89;
        margin-bottom: 40px;

        &::placeholder{
            color: #2e2f89;
            font-size: 20px;
        }
    }

    select{
        height:50px;
        border-radius: 12px;
        border: 2px solid #2e2f89;
        padding: 12px;
        font-size: 20px;
        color: #2e2f89;
        margin-bottom: 40px;

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
        width: 60px;
        height: 60px;
        background-color: #98ff98;
        color: #98ff98;
        border-radius: 50%;
        border: none;
        bottom: 30px;
        right: 30px;

        &:hover{
            cursor: pointer;
        }
    }
`
