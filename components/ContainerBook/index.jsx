import { View, Image } from 'react-native'
import { Text, } from 'react-native-paper'
import { WrapperBook, TextContent, ImgIcon, WrapperTxtTitle, TextTitle, WrapperTxt, Bar, Container, Wrapper, Noteroom, ContainerBoletim, ContainerAulas, ContainerData } from './styles'


export default function ContainerBook({ urlImage, title, text }) {
    return (

        <WrapperBook>
            <ImgIcon>
                <Image source={urlImage} style={{ width: 100, height: 100 }} />
            </ImgIcon>
            <TextTitle>{title}
                <TextContent>{text}</TextContent>
            </TextTitle>
        </WrapperBook>


    )







}
