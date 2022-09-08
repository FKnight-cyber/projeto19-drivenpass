import Record from "./Record";
import { IoOpenSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Credentials({credentials}){
    const navigate = useNavigate();
    return(
        credentials.map((record,index)=>
            <Container key={index} onClick={()=>navigate(`/my/credentials/${record.id}`)}>
                <Record
                    icon={<IoOpenSharp size={40} color="#2e2f89" />}
                    name={record.title}
                    number={undefined}
                />  
            </Container>    
        )
    )
}

const Container = styled.div`
    &:hover{
        cursor: pointer;
    }
`