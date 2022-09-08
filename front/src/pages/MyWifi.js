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

export default function MyWifi(){
    const [wifi,setWifi] = useState([]);
    const [load1,setLoad1] = useState(false);
    const [load2,setLoad2] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    const { token,wifis,setWifis } = useContext(UserContext);

    useEffect(()=>{
        setLoad1(true);

        const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/wifis/${id}`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(res=>{
            setWifi(res.data);
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
    },[]);

    function deleteWifi(id){
        setLoad2(true);
        
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
            setLoad2(false);
            navigate("/my/wifis");
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
            <Header title={wifi.title ? wifi.title : ""} />
            {
                load1 ? <Letter />
                :
                <>
                {
                    load2 ? <DeleteLetter />
                    :
                    <>
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
                    </>
                }
                </>
            }   
        </Container>
    )
}