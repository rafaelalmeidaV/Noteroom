
import ContainerBook from '../../components/ContainerBook'
import { WrapperTxt, Bar, Container, Wrapper, Noteroom } from './styles'
import image1 from '../../assets/img/caderno.png'
import image2 from '../../assets/img/boletim.png'
import image3 from '../../assets/img/video.png'
import image4 from '../../assets/img/calendario.png'


export default function Home({ navigation }) {
    return (
        <Container>

            <WrapperTxt>
                <Noteroom>NOTEROOM</Noteroom>
            </WrapperTxt>

            <Wrapper>
                <ContainerBook urlImage={image1} title="MATÉRIAS E ATIVIDADES" text="aaaaaaaa" />
                <ContainerBook urlImage={image2} title="BOLETIM" text="" />
                <ContainerBook urlImage={image3} title="VIDEO AULAS" text="" />
                <ContainerBook urlImage={image4} title="CALENDARIO" text="" />

                
                

                <Bar></Bar>

            </Wrapper>
        </Container>

    )







}
