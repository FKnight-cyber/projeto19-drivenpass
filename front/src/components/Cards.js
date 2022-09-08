import Record from "./Record";
import { IoCard } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Cards({cards}){
    const navigate = useNavigate();
    return(
        cards.map((record,index) =>
            <Container key={index} onClick={()=>navigate(`/my/cards/${record.id}`)}>
                <Record
                    icon={<IoCard size={40} color="#2e2f89" />}
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