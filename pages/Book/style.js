import styled from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    padding-top: ${Constants.statusBarHeight}px;
    background-color: #60169A;
    
     
    

`;


export const Wrapper = styled.View`  
     
    background-color: white;    
    border-top-left-radius: 20px ;
    border-top-right-radius: 20px ;
    height: 88%;
    width: 100%;
    padding-top: 10%;
    justify-content: flex-end;
`;
export const WrapperYear = styled.View`  
    border-top-left-radius: 20px ;
    border-top-right-radius: 20px ;
    justify-content: flex-start; 
    background-color: #450882 ;
    width: 100%;
    height: 9%;
    
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const Bar = styled.View`
      width: 100%;
      height: 9%;
      background-color: #60169A;
      justify-content: flex-end;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      margin-top: 12%;   
      flex-direction: row;
`;

export const Textdata = styled.Text`      
      color: white;
      font-size: 18px;
      
`;

export const ContainerSubjects = styled.View`      
      
      flex-direction: row;
      align-items: center;
      background-color: #60169A;
      border-radius: 8px;
      width: 80%;
      margin: auto;
      margin-bottom: 5%;
      padding: 3%;
      
`;
export const TextSubjects = styled.Text`      
      text-align: center;
      color: white;
      //ajustar no meio o texto
      
      justify-content: center;
      margin: auto;
      
      
      
`;

export const Noteroom = styled.Text`      
      color: white;
      font-size: 22px; 
   
`;



export const NumberofLessons = styled.Text`
      color: white;
      
     

`;

export const Touchable = styled.TouchableOpacity`
      
`;