import { Container } from "./InitialPage";
import Header from "../components/Header";
import { Return } from "../pages/SelectCategory.js"
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronBack, IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
import Letter from "../components/Loaders/LetterLoader";
import DeleteLetter from "../components/Loaders/DeleteLoader";

export default function MyCredential(){
    const [credential,setCredential] = useState([]);
    const [load1,setLoad1] = useState(false);
    const [load2,setLoad2] = useState(false);

    const navigate = useNavigate();
    const {id} = useParams();

    const { token,setCredentials,credentials } = useContext(UserContext);

    useEffect(()=>{
        setLoad1(false);

        const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/credentials/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(res=>{
            setCredential(res.data);
            setLoad1(false);
        });

        promise.catch(Error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: `${Error.response.data}`,
                confirmButtonColor: "crimson"
              }).then((result)=>{
                if(result.isConfirmed){
                    setLoad1(false);
                }
            });
        });
    },[])

    function deleteCredential(id){
        setLoad2(true);
        
        const promise = axios.delete(`${process.env.REACT_APP_BASE_URL}/credentials/delete/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(()=>{
            const arr = [...credentials];
            for(let i = 0; i < arr.length;i++){
                if(arr[i].id === Number(id)){
                    arr.splice(i, 1);
                    break;
                }
            }
            setCredentials([...arr]);
            setLoad2(false);
            navigate("/my/credentials");
        });

        promise.catch(Error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: `${Error.response.data}`,
                confirmButtonColor: "crimson"
              }).then((result)=>{
                if(result.isConfirmed){
                    setLoad2(false);
                }
            });
        });
    }
    
    return(
        <Container>
            <Header title={credential.title ? credential.title : ""} />
            {
                load1 ? <Letter />
                :
                <>
                    {
                        load2 ? <DeleteLetter />
                        :
                        <>
                            <Section>
                                <h1>URL</h1>
                                <h2>
                                    {
                                        credential.url ? credential.url : ""
                                    }
                                </h2>
                                <h1>User</h1>
                                <h2>
                                    {
                                        credential.username ? credential.username : ""
                                    }
                                </h2>
                                <h1>Password</h1>
                                <h2>
                                    {
                                        credential.password ? credential.password : ""
                                    }
                                </h2>
                            </Section>
                            <Link to="/my/credentials" style={{color: "#000000"}}>
                                <Return>
                                    <IoChevronBack size={24} />
                                    <h5>Voltar</h5>
                                </Return>
                            </Link>
                            <Delete onClick={()=>deleteCredential(id)}>
                                <IoClose size={40} />
                            </Delete>
                        </>
                    }
                </>
            }  
        </Container>
    )
}

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 14px;

    h1{
        color: #000000;
        font-weight: bolder;
        font-size: 26px;
        margin-bottom: 10px;
        word-wrap: break-word;
        width: 100%;
    }

    h2{
        margin-bottom: 20px;
        font-size: 20px;
        word-wrap: break-word;
        width: 100%;
    }
`

export const Delete = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: crimson;
    color: #ffffff;
    border-radius: 50%;
    bottom: 30px;
    right: 30px;
`