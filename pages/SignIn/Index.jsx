import { Text, Button, View, TextInput, SafeAreaView, Alert } from "react-native";
import { NavigationAction } from "@react-navigation/native";
import { Noteroom, StyledButton, Wrapper, ButtonWrapper, Container, TextTitle, Emailzone,ButtonContainer, CheckBoxContainer, TextCheck, TextEsqueci, TextNewAccount, TextCadastra, Containerbar1, Containerball, Containerbar2, ContainerOU, Textball ,WrapperTxt, StyledTextInput } from "./styles";
import SuperButton from "../../components/Button";
import { useState } from "react";
import CreateAccount from "../CreateAccount";
import { Checkbox } from "react-native-paper";



export default function SignIn({ navigation }) { 
    
    function handleNavigationCreateAccount() {
        navigation.navigate('CreateAccount')
    }
    function handleNavigationHome() {
        navigation.navigate('Home')
    }

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const [checked, setChecked] = useState(false);

    return (
        <Container>
            <WrapperTxt >
            <Noteroom>NOTEROOM</Noteroom>
            </WrapperTxt>            
            <Wrapper>
                
                <SafeAreaView style={{ marginTop: "7%" }}>
                    <Emailzone>
                        <StyledTextInput
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Email"
                            
                        />
                    </Emailzone>
                    <Emailzone>
                        <StyledTextInput
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Senha"
                            secureTextEntry
                            
                        />
                    </Emailzone>

                    

                </SafeAreaView>


                <CheckBoxContainer>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <TextCheck>
                        Manter conectado
                    </TextCheck>
                    <TextEsqueci>
                        Esqueci minha senha
                    </TextEsqueci>

                </CheckBoxContainer>

                <ButtonContainer>
                    <SuperButton
                        onPress={handleNavigationHome}
                        text="Entrar"
                        color="#60169A"
                    />
                </ButtonContainer>
                <TextNewAccount >
                    Ainda nao possui uma conta? <TextCadastra onPress={handleNavigationCreateAccount}>Cadastre-se</TextCadastra>
                </TextNewAccount>
                {/* <ContainerOU>
                    <Containerbar1 />
                    <Containerball><Textball>OU</Textball></Containerball>
                    <Containerbar1 />
                </ContainerOU> */}


            </Wrapper>
        </Container>
    )


}

