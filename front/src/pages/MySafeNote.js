import { Container } from "./InitialPage";
import Header from "../components/Header";
import { Return } from "../pages/SelectCategory.js"
import { Section,Delete } from "./MyCredential";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { IoChevronBack,IoClose } from "react-icons/io5";

export default function MySafeNote(){
    const [safeNote,setSafeNote] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    const { token,safenotes,setSafeNotes } = useContext(UserContext);

    useEffect(()=>{
        const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/notes/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(res=>{
            setSafeNote(res.data);
        });

        promise.catch(Error=>{
            alert(Error.response.data);
        });
    },[]);

    function deleteNote(id){
        
        const promise = axios.delete(`${process.env.REACT_APP_BASE_URL}/notes/delete/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(()=>{
            const arr = [...safenotes];
            for(let i = 0; i < arr.length;i++){
                if(arr[i].id === Number(id)){
                    arr.splice(i, 1);
                    break;
                }
            }
            setSafeNotes([...arr]);
            navigate("/my/notes");
        });

        promise.catch(Error=>{
            alert(Error.response.data);
        });
    };
    
    return(
        <Container>
            <Header title={safeNote.title ? safeNote.title : ""} />
            <Section>
                <h1>My annotation</h1>
                <h2>
                    {
                        safeNote.description ? safeNote.description : ""
                    }
                </h2>
            </Section>
            <Link to="/my/notes" style={{color: "#000000"}}>
                <Return>
                    <IoChevronBack size={24} />
                    <h5>Voltar</h5>
                </Return>
            </Link>
            <Delete onClick={()=>deleteNote(id)}>
                <IoClose size={40} />
            </Delete>    
        </Container>
    )
}