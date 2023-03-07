
import ContainerBook from '../../components/ContainerBook'
import { WrapperTxt, Bar, Container, Wrapper, Noteroom } from './styles'
import image1 from '../../assets/img/caderno.png'
import image2 from '../../assets/img/boletim.png'
import image3 from '../../assets/img/video.png'
import image4 from '../../assets/img/calendario.png'
import { StatusBar } from 'expo-status-bar';


export default function Home({ navigation }) {
    <StatusBar style="#60169A" />

    function handleNavigationBook() {
        navigation.navigate("Book")
        console.log("svzsv", navigation)
    }
    
    return (
        <Container> 
            

            <WrapperTxt>
                <Noteroom>NOTEROOM</Noteroom>
                
            </WrapperTxt>                

            <Wrapper >
                <ContainerBook onPress={handleNavigationBook} urlImage={image1} title="MATÉRIAS E ATIVIDADES" text="Visualize as suas materias e atividades, simples e rapido"/>
                <ContainerBook urlImage={image2} title="BOLETIM" text="Boletim para anotações das notas do periodo" />
                <ContainerBook urlImage={image3} title="VIDEO AULAS" text="Video aulas com conteudos dos vestibulares mais famosos do Brasil" />
                <ContainerBook urlImage={image4} title="CALENDARIO" text="Calendario completo e editavel para nunca perder o seu compromisso" />
                <Bar></Bar>

            </Wrapper>
        </Container>

    )







}
