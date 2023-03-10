import { View, Text, FlatList } from "react-native";
import { Container, Wrapper, WrapperYear, Bar, Textdata, ContainerSubjects, TextSubjects } from "./style";

const data = {
    year: "9° ANO",
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
                <Textdata>{data.year}: {data.turma}</Textdata>
            </WrapperYear>
            <Wrapper >
                <FlatList
                    data={data.subjects}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <ContainerSubjects>
                            <TextSubjects>{item.numberoflessons} </TextSubjects>
                            <TextSubjects>{item.name}</TextSubjects>                            
                        </ContainerSubjects>
                    )}
                />

            </Wrapper>
        </Container>


    );
}