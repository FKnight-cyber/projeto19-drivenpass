import { Container } from "./InitialPage";
import Header from "../components/Header";
import { Return } from "../pages/SelectCategory.js"
import { Section,Delete } from "./MyCredential";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { IoChevronBack,IoClose } from "react-icons/io5";

export default function MyWifi(){
    const [wifi,setWifi] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    const { token,wifis,setWifis } = useContext(UserContext);

    useEffect(()=>{
        const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/wifis/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(res=>{
            setWifi(res.data);
        });

        promise.catch(Error=>{
            alert(Error.response.data);
        });
    },[]);

    function deleteWifi(id){
        
        const promise = axios.delete(`${process.env.REACT_APP_BASE_URL}/wifis/delete/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(()=>{
            const arr = [...wifis];
            for(let i = 0; i < arr.length;i++){
                if(arr[i].id === Number(id)){
                    arr.splice(i, 1);
                    break;
                }
            }
            setWifis([...arr]);
            navigate("/my/wifis");
        });

        promise.catch(Error=>{
            alert(Error.response.data);
        });
    };
    
    return(
        <Container>
            <Header title={wifi.title ? wifi.title : ""} />
            <Section>
                <h1>Network Name</h1>
                <h2>
                    {
                        wifi.name ? wifi.name : ""
                    }
                </h2>
                <h1>Password</h1>
                <h2>
                    {
                        wifi.password ? wifi.password : ""
                    }
                </h2>
            </Section>
            <Link to="/my/wifis" style={{color: "#000000"}}>
                <Return>
                    <IoChevronBack size={24} />
                    <h5>Voltar</h5>
                </Return>
            </Link>
            <Delete onClick={()=>deleteWifi(id)}>
                <IoClose size={40} />
            </Delete>    
        </Container>
    )
}