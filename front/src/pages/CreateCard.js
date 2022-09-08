import { Container } from "./InitialPage";
import { Return } from "./SelectCategory";
import Header from "../components/Header";
import { Form } from "./CreateCredential";
import { IoCheckmark, IoChevronBack } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Swal from "sweetalert2";
import Letter from "../components/Loaders/LetterLoader";

export default function CreateCard(){

    const [title,setTitle] = useState('');
    const [number,setNumber] = useState('');
    const [name,setName] = useState('');
    const [securityCode,setSecurityCode] = useState('');
    const [expirationDate,setExpirationDate] = useState('');
    const [password,setPassword] = useState('');
    const [isVirtual,setIsVirtual] = useState(true);
    const [type,setType] = useState('');
    const [load,setLoad] = useState('');

    const { token } = useContext(UserContext);

    const navigate = useNavigate();

    function createCard(event){
        event.preventDefault();
        setLoad(true);

        const body = {
            title,
            number,
            name,
            securityCode,
            expirationDate,
            password,
            isVirtual,
            type
        }

        const promise = 
        axios.post(`${process.env.REACT_APP_BASE_URL}/categories/cards/create`
        ,body,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(()=>{
            let timerInterval
            Swal.fire({
                title: 'Card record added!',
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
            <Header title={"Cards"} />
            {
                load ? <Letter /> 
                :
                <>
                <Form onSubmit={createCard}>
                    <input type="text"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                    <input type="text"
                        placeholder="Card Number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        maxLength={16}
                        required
                    />
                    <input type="text"
                        placeholder="Card Holder Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <input type="text"
                        placeholder="CVC"
                        value={securityCode}
                        onChange={e => setSecurityCode(e.target.value)}
                        maxLength={4}
                        required
                    />
                    <input type="text"
                        placeholder="Expiration Date (mm/yy)"
                        value={expirationDate}
                        onChange={e => setExpirationDate(e.target.value)}
                        maxLength={5}
                        required
                    />
                    <input type="text"
                        placeholder="Card Type"
                        value={type}
                        onChange={e => setType(e.target.value)}
                        required
                    />
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <h1>isVirtual?</h1>
                    <select onChange={e => setIsVirtual(e.target.value)}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
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