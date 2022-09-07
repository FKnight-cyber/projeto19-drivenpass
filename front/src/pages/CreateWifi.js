import { Container } from "./InitialPage";
import { Return } from "./SelectCategory";
import Header from "../components/Header";
import { Form } from "./CreateCredential";
import { IoCheckmark, IoChevronBack } from "react-icons/io5"
import { Link } from "react-router-dom";

export default function CreateWifi(){
    return(
        <Container>
            <Header title={"Wi-fi passwords"} />
            <Form>
                <input type="text"
                    placeholder="Title"
                    required
                 />
                 <input type="text"
                    placeholder="URL"
                    required
                 />
                 <input type="text"
                    placeholder="User"
                    required
                 />
                 <input type="password"
                    placeholder="Password"
                    required
                 />
                 <button type="submit">
                    <IoCheckmark size={50} color="#ffffff" />
                 </button>
            </Form>
            <Link to="/categories" style={{color: "#000000"}}>
                <Return>
                    <IoChevronBack size={24} />
                    <h5>Voltar</h5>
                </Return>
            </Link>
        </Container>
    )
};