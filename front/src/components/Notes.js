import Record from "./Record";
import { IoPencil } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Notes({notes}){
    const navigate = useNavigate();
    return(
        notes.map((record,index) =>
            <Container key={index} onClick={()=>navigate(`/my/notes/${record.id}`)}>
                <Record
                    icon={<IoPencil size={40} color="#2e2f89" />}
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