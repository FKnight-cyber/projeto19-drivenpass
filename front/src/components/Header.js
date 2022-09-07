import styled from "styled-components";
import lock from "../assets/lock.png";
import { IoWallet } from "react-icons/io5";

export default function Header({title}){
    return(
        <>
            <Container>
                <div className="left">
                    <img src={lock} alt="" srcset="" />
                    <h1>DrivenPass</h1>
                </div>
                <IoWallet color="#2e2f89" size={46} />
            </Container>
            <div className="sub-header">
                {title}
            </div>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    padding: 12px;

    .left{
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 50px;
            height: 50px;
            margin-right: 16px;
        }

        h1{
            font-size: 36px;
            color: #2e2f89;
        }
    }
`