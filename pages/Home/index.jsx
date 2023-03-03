import { View } from 'react-native'
import { WrapperTxt, Bar, Container, Wrapper, Noteroom, ContainerBook, ContainerBoletim, ContainerAulas, ContainerData } from './stylehome'


export default function Home({ navigation }) {
    return (
        <Container>

            <WrapperTxt>
                <Noteroom>NOTEROOM</Noteroom>
            </WrapperTxt>

            <Wrapper>
                <ContainerBook>

                </ContainerBook>

                <ContainerBoletim>

                </ContainerBoletim>

                <ContainerAulas>

                </ContainerAulas>

                <ContainerData>

                </ContainerData>

                <Bar></Bar>

            </Wrapper>
        </Container>
        
    )


    




}
