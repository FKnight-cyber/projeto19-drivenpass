import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Record from "../components/Record.js";
import { IoOpenSharp, IoPencil, IoCard, IoWifi, IoAdd } from "react-icons/io5";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Swal from "sweetalert2";
import Circle from "../components/Loaders/CircleLoader";

export default function InitialPage(){

    const [load1,setLoad1] = useState(false);
    const [load2,setLoad2] = useState(false);
    const [load3,setLoad3] = useState(false);
    const [load4,setLoad4] = useState(false);

    const { token,
        credentials,
        setCredentials,
        cards,
        setCards,
        safenotes,
        setSafeNotes,
        wifis,
        setWifis 
    } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(()=>{
        setLoad1(true);
        setLoad2(true);
        setLoad3(true);
        setLoad4(true);

        const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/credentials`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise.then(res=>{
            setCredentials(res.data);
            setLoad1(false);
        });

        promise.catch(Error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${Error.response.data}`,
                confirmButtonColor: "crimson"
              }).then((result)=>{
                if(result.isConfirmed){
                    setLoad1(false);
                }
              });
        });

        const promise2 = axios.get(`${process.env.REACT_APP_BASE_URL}/notes`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise2.then(res=>{
            setSafeNotes(res.data);
            setLoad2(false);
        });

        promise2.catch(Error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${Error.response.data}`,
                confirmButtonColor: "crimson"
              }).then((result)=>{
                if(result.isConfirmed){
                    setLoad2(false);
                }
              });
        });

        const promise3 = axios.get(`${process.env.REACT_APP_BASE_URL}/cards`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise3.then(res=>{
            setCards(res.data);
            setLoad3(false);
        });

        promise3.catch(Error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${Error.response.data}`,
                confirmButtonColor: "crimson"
              }).then((result)=>{
                if(result.isConfirmed){
                    setLoad3(false);
                }
              });
        });

        const promise4 = axios.get(`${process.env.REACT_APP_BASE_URL}/wifis`,{
            headers:{ 'x-access-token': `${token}` }
        });

        promise4.then(res=>{
            setWifis(res.data);
            setLoad4(false);
        });

        promise4.catch(Error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${Error.response.data}`,
                confirmButtonColor: "crimson"
              }).then((result)=>{
                if(result.isConfirmed){
                    setLoad4(false);
                }
              });
        });
    },[])

    return(
        <Container>
            <Header title={"My passwords"} />
            <Link to="/my/credentials" style={{textDecoration:"none",width:"100%"}}>
                <Record 
                    icon={<IoOpenSharp size={40} color="#2e2f89" />}
                    name={"Credentials"}
                    number={load1 ? <Circle /> : credentials.length}
                />
            </Link>
            <Link to="/my/notes" style={{textDecoration:"none",width:"100%"}}>
                <Record 
                    icon={<IoPencil size={40} color="#2e2f89" />}
                    name={"Safe notes"}
                    number={load2 ? <Circle /> : safenotes.length}
                />
            </Link>
            <Link to="/my/cards" style={{textDecoration:"none",width:"100%"}}>
                <Record 
                    icon={<IoCard size={40} color="#2e2f89" />}
                    name={"Cards"}
                    number={load3 ? <Circle /> :cards.length}
                />
            </Link>
            <Link to="/my/wifis" style={{textDecoration:"none",width:"100%"}}>
                <Record 
                    icon={<IoWifi size={40} color="#2e2f89" />}
                    name={"Wi-fi passwords"}
                    number={load4 ? <Circle /> : wifis.length}
                />
            </Link>
            <div className="adder" onClick={()=>navigate("/categories")} >
                <IoAdd size={60} />
            </div>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;

    .sub-header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10px;
        width: 100%;
        min-height: 6vh;
        margin-bottom: 20px;
        background-color: #2e2f89;
        color: #98ff98;
        font-size: 20px;
        overflow-x: hidden;
    }

    .adder{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        background-color: #2e2f89;
        color: #98ff98;
        border-radius: 50%;
        bottom: 30px;
        right: 30px;
    }
`

