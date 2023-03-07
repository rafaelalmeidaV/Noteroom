import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    /* align-items: center; */
    justify-content: flex-end;
    background-color: #60169A;    
`;


export const Wrapper = styled.View`  
    align-items: center;
    width: 100%;    
    
    background-color: white;    
    border-top-left-radius: 20px ;
    border-top-right-radius: 20px ;
    justify-content: flex-end;      
`;
export const WrapperTxt = styled.View`      
      flex: 1;
      padding-bottom: 5%;
      justify-content: flex-end;
      align-items: center;
`;
export const Noteroom = styled.Text`      
      color: white;
      font-size: 22px;  
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
export const TextTitle = styled.Text`      
      color: #60169A;
      font-size: 16px;  
      font-weight: bold;  
      flex: 1;  
      padding-top: 8%;
      padding-bottom: 5%;
      padding-right: 5%; 
`;
export const ImgIcon = styled.View`      
      justify-content: center;
      align-items: center;
      padding: 5%;
`;
export const TextContent = styled.Text`      
      color: gray;
      font-size: 13px;  
      flex: 1;  
      padding-bottom: 5%;
      padding-right: 5%;       
`;