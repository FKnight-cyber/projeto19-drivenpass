import { Container } from "./InitialPage";
import { Return } from "./SelectCategory";
import Header from "../components/Header";
import { Form } from "./CreateCredential";
import { IoCheckmark, IoChevronBack } from "react-icons/io5"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useState,useContext } from "react";
import Swal from "sweetalert2";
import Letter from "../components/Loaders/LetterLoader";

export default function CreateWifi(){

    const [title,setTitle] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [load,setLoad] = useState(false);

    const { token } = useContext(UserContext);

    const navigate = useNavigate();

    function createWifi(event){
        event.preventDefault();
        setLoad(true);

        const body = {
            title,
            name,
            password
        }

        const promise = 
        axios.post(`${process.env.REACT_APP_BASE_URL}/categories/wifis/create`
        ,body,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(()=>{
            let timerInterval
            Swal.fire({
                title: 'Wifi record added!',
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
            <Header title={"Wi-fi passwords"} />
            {
                load ? <Letter /> 
                :
                <>
                    <Form onSubmit={createWifi}>
                        <input type="text"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                        <input type="text"
                        placeholder="Wifi name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        />
                        <input type="password"
                            placeholder="Wifi password"
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