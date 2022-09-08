import { Container } from "./InitialPage";
import { Return } from "./SelectCategory";
import Header from "../components/Header";
import { Form } from "./CreateCredential";
import { IoCheckmark, IoChevronBack } from "react-icons/io5"
import { Link,useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Swal from "sweetalert2";
import Letter from "../components/Loaders/LetterLoader";

export default function CreateNote(){

    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [load,setLoad] = useState('');

    const navigate = useNavigate();

    const { token } = useContext(UserContext);

    function createNote(event){
        event.preventDefault();
        setLoad(true);

        const body = {
            title,
            description
        }

        const promise = 
        axios.post(`${process.env.REACT_APP_BASE_URL}/categories/notes/create`
        ,body,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(()=>{
            let timerInterval
            Swal.fire({
                title: 'Safe note record added!',
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
            <Header title={"Safe Notes"} />
            {
                load ? <Letter />
                :
                <>
                    <Form onSubmit={createNote}>
                        <input type="text"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            maxLength={50}
                            required
                        />
                        <textarea
                        maxLength={1000}
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                        required
                        placeholder="Description"
                        >
                        </textarea>
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