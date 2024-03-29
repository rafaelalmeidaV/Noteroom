import styled from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';


export const Container = styled.View`
    background-color: #60169A;
    padding-top: ${Constants.statusBarHeight}px;
    
`;

export const Wrapper = styled.View`    
    padding-left: 6%;
    padding-right: 6%;
    padding-bottom: 15%;
    background-color: white;    
    border-top-left-radius: 20px ;
    border-top-right-radius: 20px ;
    

`;

export const Emailzone = styled.View`   
   height: 40px;
   margin: 12px;
   padding-left: 10px;
   border-bottom-width: 1px;
   border-color: white;    
`;

export const StyledTextInput = styled.TextInput.attrs({
    placeholderTextColor: "white",
})`
 font-size: 12px;
`;
export const TextFuncao = styled.Text`
 margin-top: 7%;
 margin-bottom: 7%;
 font-size: 18px;
 color: #60169A;
 font-family: "Roboto";
`;
export const CheckBoxContainer = styled.View`
    padding-top: 4%;
    flex-Direction: row;     
`;

export const TextCheck = styled.Text`
   color: #60169A;
   margin-top: 8px;    
`;
export const ButtonContainer = styled.View`
    padding: 2px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
    margin-top: 10%;    
`;
export const TextTenhoConta = styled.Text`
   font-size: 14px;     
   color: #60169A;   
   text-align: center;    
`;
export const TextEntrar = styled.Text`
   font-size: 16px;   
   color: #60169A;
   font-weight: bold;   
`;
export const Noteroom = styled.Text`
      
      color: white;
      font-size: 24px;
      text-align: center;
      font-family: "Roboto";
`;