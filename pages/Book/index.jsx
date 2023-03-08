import { View, Text } from "react-native";
import { Container, Wrapper, WrapperYear, Bar, Textdata } from "./style";

const data = {
    year: "9° ano",
    turma: "A",
    subjects: [
        {
            name: "Matemática",
            numberoflessons: 3,
        },
        {
            name: "Português",
            numberoflessons: 1,
        },
        {
            name: "História",
            numberoflessons: 2,
        }
    ]

}



export default function Book({ navigation }) {

    return (
        <Container>
            <WrapperYear>
                <Textdata>{data.year} {data.subjects[0].name}</Textdata>
            </WrapperYear>
            <Wrapper >






               
            </Wrapper>
        </Container>


    );
}