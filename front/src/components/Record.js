import styled from "styled-components";

export default function Record({icon,name,number}){
    return(
        <Container number={number} >
            <div className="left">
                {icon}
                <h3>{name}</h3>
            </div>
            <div className="circle">
                <h4>{number}</h4>
            </div>
        </Container>
    )
}

const Container = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        padding: 12px;
        margin-bottom: 20px;

        .left{
            display: flex;
            justify-content: center;
            align-items: center;

            h3{
                margin-left: 10px;
                font-size: 18px;
                color: #000000;
                width: 240px;
                word-wrap: break-word;
            }
        }

        .circle{
            display: ${props => props.number !== undefined ? "flex" : "none"};
            justify-content: center;
            align-items: center;
            background-color: ${props => typeof(props.number) === "number" ? "#2e2f89" : "none"};
            border-radius: 50%;
            width: 40px;
            height: 40px;

            h4{
                color: ${props => props.number === 0 ? "crimson" : "#98ff98"};
                font-size: 20px;
            }
        }
`