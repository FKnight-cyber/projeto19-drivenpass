import { Container } from "./InitialPage";
import Header from "../components/Header";
import { Return } from "../pages/SelectCategory.js"
import { Section,Delete } from "./MyCredential";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { IoChevronBack,IoClose } from "react-icons/io5";

export default function MyCard(){
    const [card,setCard] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    const { token,cards,setCards } = useContext(UserContext);

    useEffect(()=>{
        const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/cards/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(res=>{
            setCard(res.data);
            console.log(res.data)
        });

        promise.catch(Error=>{
            alert(Error.response.data);
        });
    },[]);

    function deleteCard(id){
        
        const promise = axios.delete(`${process.env.REACT_APP_BASE_URL}/cards/delete/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(()=>{
            const arr = [...cards];
            for(let i = 0; i < arr.length;i++){
                if(arr[i].id === Number(id)){
                    arr.splice(i, 1);
                    break;
                }
            }
            setCards([...arr]);
            navigate("/my/cards");
        });

        promise.catch(Error=>{
            alert(Error.response.data);
        });
    };
    
    return(
        <Container>
            <Header title={card.title ? card.title : ""} />
            <Section>
                <h1>Number</h1>
                <h2>
                    {
                        card.number ? card.number : ""
                    }
                </h2>
                <h1>Holder's name</h1>
                <h2>
                    {
                        card.name ? card.name : ""
                    }
                </h2>
                <h1>CVC</h1>
                <h2>
                    {
                        card.securityCode ? card.securityCode : ""
                    }
                </h2>
                <h1>Expiration Date</h1>
                <h2>
                    {
                        card.expirationDate ? card.expirationDate : ""
                    }
                </h2>
                <h1>Is Virtual?</h1>
                <h2>
                    {
                        card.isVirtual ? "Yes" : "No"
                    }
                </h2>
                <h1>Password</h1>
                <h2>
                    {
                        card.password ? card.password : ""
                    }
                </h2>
                <h1>Type</h1>
                <h2>
                    {
                        card.type ? card.type : ""
                    }
                </h2>
            </Section>
            <Link to="/my/cards" style={{color: "#000000"}}>
                <Return>
                    <IoChevronBack size={24} />
                    <h5>Voltar</h5>
                </Return>
            </Link>
            <Delete onClick={()=>deleteCard(id)}>
                <IoClose size={40} />
            </Delete>    
        </Container>
    )
}