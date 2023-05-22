import { View, Text, FlatList } from "react-native";
import { Container, Wrapper,Touchable, WrapperYear,NumberofLessons, Textdata,Bar, ContainerSubjects, TextSubjects, Noteroom } from "./style";

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
    function handleNavigationBookSubjects() {
        navigation.navigate('BookSubjects')
    }

    return (
        <Container>
             <Noteroom>NOTEROOM</Noteroom>
            <WrapperYear>
                <Textdata>{data.year}: {data.turma}</Textdata>
            </WrapperYear>
            <Wrapper >
                
                <FlatList
                    data={data.subjects}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (

                        <ContainerSubjects onPress={handleNavigationBookSubjects}>
                            <NumberofLessons>{item.numberoflessons} </NumberofLessons>
                            <TextSubjects>                                
                                {item.name}
                            </TextSubjects>                                                      
                        </ContainerSubjects>
                    )}
                />
                
                <Bar></Bar>
            </Wrapper>
        </Container>


    );
}