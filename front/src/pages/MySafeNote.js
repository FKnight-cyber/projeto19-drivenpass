import { Container } from "./InitialPage";
import Header from "../components/Header";
import { Return } from "../pages/SelectCategory.js"
import { Section,Delete } from "./MyCredential";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { IoChevronBack,IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
import Letter from "../components/Loaders/LetterLoader";
import DeleteLetter from "../components/Loaders/DeleteLoader";

export default function MySafeNote(){

    const [safeNote,setSafeNote] = useState([]);
    const [load1,setLoad1] = useState(false);
    const [load2,setLoad2] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    const { token,safenotes,setSafeNotes } = useContext(UserContext);

    useEffect(()=>{
        setLoad1(true);

        const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/notes/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(res=>{
            setSafeNote(res.data);
            setLoad1(true);
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
    },[]);

    function deleteNote(id){
        setLoad2(true);
        
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
            setLoad2(true);
            navigate("/my/notes");
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
    };
    
    return(
        <Container>
            <Header title={safeNote.title ? safeNote.title : ""} />
            {
                load1 ? <Letter />
                :
                <>
                    {
                        load2 ? <DeleteLetter />
                        :
                        <>
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
                        </>
                    }
                </>
            }    
        </Container>
    )
}