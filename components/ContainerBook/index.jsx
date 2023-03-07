import { View, Image } from 'react-native'

import { Wrapper2, WrapperBook, TextContent, ImgIcon, TextTitle} from './styles'


export default function ContainerBook({ urlImage, title, text, onPress, navigator }) {
    return (
        
        <WrapperBook onPress={onPress}>
            <ImgIcon>
                <Image source={urlImage} style={{ width: 100, height: 100 }} />
            </ImgIcon>

            <Wrapper2>
                <TextTitle>{title}</TextTitle>
                <TextContent>{text}</TextContent>
            </Wrapper2>

        </WrapperBook>

    )

}
