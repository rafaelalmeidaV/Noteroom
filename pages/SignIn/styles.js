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
    padding-left: 6%;
    padding-right: 6%;
    padding-bottom: 30%;

    width: 100%;
   /* flex: 1; */

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
    padding-top: 10%;
    flex-Direction: row;
    margin-Bottom: 20px;
  
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
export const TextNewAccount = styled.Text`
   font-size: 14px;   
   text-align: center;
   color: #60169A;   
`;
export const TextCadastra = styled.Text`
   font-size: 16px;   
   color: #60169A;
   font-weight: bold;
`;
export const Containerbar1 = styled.View`
   
   background-color:#60169A;
   height: 1.5px;
   width: 39%;
`;
export const Containerball = styled.View`
   
   border: #60169A;
   border-width:1.5px;
   height: 60px;
   width: 60px;
   border-radius: 100px;
   margin-left: 5px;
   margin-right: 5px;   
   justify-content: center;
   align-items: center;
`;
export const ContainerOU = styled.View`
   flex-direction: row;
   height: 130px;
   align-items: center;
   
   
`;
export const Textball = styled.Text`
   color: #60169A;
   font-size: 20px;   
`;
export const WrapperTxt = styled.View`
      
      /* height: 35%;  */
      flex: 1;
      text-Align: center; 
      justify-content: center;
      align-items: center;


`;
export const Noteroom = styled.Text`
      
      color: white;
      font-size: 30px;


`;

export const StyledTextInput = styled.TextInput.attrs({
      placeholderTextColor: "#60169A",
   
})`
   font-size: 12px;
`;