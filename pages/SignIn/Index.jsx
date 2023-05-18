import { Text, Button, View, TextInput, SafeAreaView, Alert } from "react-native";
import { NavigationAction } from "@react-navigation/native";
import { Noteroom, StyledButton, Wrapper, ButtonWrapper, Container, TextTitle, Emailzone, ButtonContainer, CheckBoxContainer, TextCheck, TextEsqueci, TextNewAccount, TextCadastra, Containerbar1, Containerball, Containerbar2, ContainerOU, Textball, WrapperTxt, StyledTextInput } from "./styles";
import SuperButton from "../../components/Button";
import { useEffect, useState } from "react";
import CreateAccount from "../CreateAccount";
import { Checkbox } from "react-native-paper";
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';



export default function SignIn({ navigation }) {

    <StatusBar style="#60169A" />

    function handleNavigationCreateAccount() {
        navigation.navigate('CreateAccount')
    }
    function handleNavigationHome() {
        navigation.navigate('Home')
    }

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const [checked, setChecked] = useState(false);

    // useEffect(() => {
    //     navigation.navigate('Home')
    // }, []);



    // define o URL da rota do Firebase Realtime Database

    async function handleSignIn() {
        const url = "https://note-room-default-rtdb.firebaseio.com/users.json";

        try {

            const response = await axios.get(`${url}`)
            console.log(response.data)
            const data = response.data

            const filteredUsers = Object.values(data).filter(user => user.email === email);


            const user = filteredUsers.find(user => user.password === password);


            if (user) {
                console.log("Usuário encontrado.");
                handleNavigationHome()
            } else {
                console.log("Credenciais inválidas.");
                Alert.alert("Credenciais inválidas.");
            }
        } catch (error) {
            console.error(error);
        }
    }
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
                        onPress={handleSignIn}
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

