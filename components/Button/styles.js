import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Home from "../../pages/Home";


export const ButtonWrapper = styled.TouchableOpacity`
    background-color: ${props => props.color ? props.color : "blue"};
    border-radius: 15px;
    padding: 14px;
    width: 60%;
    align-items: center;
    justify-content: center;
    


`;
