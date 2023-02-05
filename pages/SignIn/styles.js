import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonWrapper = styled.TouchableOpacity`
    border-radius: 4px;
    background-color: purple;
    padding: 10px;
    width: 60%;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    background-color: #60169A;
    
`;

export const Wrapper = styled.View`    
    padding-left: 10%;
    padding-right: 10%;
    width: 100%;
    
    background-color: white;    
    border-top-left-radius: 20px ;
    border-top-right-radius: 20px ;


`;

export const TextTitle = styled.Text`
    color: white;
    font-family: "Roboto";
    font-size: 20px;
    
`;
export const Emailzone = styled.View`
   
   height: 40px;
   margin: 12px;
   padding: 10px;
   border-bottom-width: 1px;
   border-color: #60169A;
    
`;

export const ButtonContainer = styled.View`
    padding: 2px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
    
`;
export const CheckBoxContainer = styled.View`
    padding-top: 5%;
    flex-Direction: row;
    margin-Bottom: 20;
  
`;
export const TextCheck = styled.Text`
   color: #60169A;
   margin-top: 8px;
   
  
`;
export const TextEsqueci = styled.Text`
   font-size: 13px;
   margin-top: 8px;
   margin-left: 10%;
   color: #60169A;
   text-decoration: underline;
`;

