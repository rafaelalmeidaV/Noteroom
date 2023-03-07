import { ButtonWrapper } from "./styles"
import { TextTitle } from "../../pages/SignIn/styles"


export default function SuperButton({ color, text, onPress, navigator }) {
    return (
    <ButtonWrapper color={color} onPress={onPress}>
        <TextTitle>
            {text}
        </TextTitle>
    </ButtonWrapper>)
}
