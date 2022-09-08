import Record from "./Record";
import { IoWifi } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Wifis({wifis}){
    const navigate = useNavigate();
    return(
        wifis.map((record,index) =>
            <Container key={index} onClick={()=>navigate(`/my/wifis/${record.id}`)}>
                <Record
                    icon={<IoWifi size={40} color="#2e2f89" />}
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