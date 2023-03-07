import { TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, Alert } from "react-native";
import { Noteroom, TextEntrar, TextTenhoConta, ButtonContainer, TextCheck, Wrapper, Container, Emailzone, StyledTextInput, CheckBoxContainer, TextFuncao } from "./stylescreate";
import { useEffect, useRef, useState } from "react";
import { Checkbox } from "react-native-paper";
import SuperButton from "../../components/Button";
import Database, { User } from "../../services/database/user";
import { StatusBar } from 'expo-status-bar';



export default function CreateAccount({ navigation }) {
    <StatusBar style="#60169A"/>
    const [name, onChangename] = useState('');
    const [telefone, onChangetelefone] = useState('');
    const [email, onChangeemail] = useState('');
    const [password, onChangepassword] = useState('');

    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const db = new Database();

    async function createUser() {
        console.log("Cadastrando usuário")

        if(name === "" || telefone === "" || email === "" || password === ""){ 
            Alert.alert("Erro", "Preencha todos os campos")
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            Alert.alert("Erro", "Email inválido")
            return
        }
        
        if(password.length < 6){
            Alert.alert("Erro", "Senha deve ter no mínimo 6 caracteres")
            return
        } 
        if(telefone.length < 11){
            Alert.alert("Erro", "Telefone inválido")
            return
        }

        try {
            await db.postUser({ name, telefone, email, password })
            navigation.navigate('SignIn')
            Alert.alert("Sucesso", "Usuário cadastrado com sucesso")
        } catch (error) {
            Alert.alert("Erro", "Erro ao cadastrar usuário")
            console.log(error)
        }

    }

    function handleNavigationSignIn() {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <Container>
                    <Noteroom>NOTEROOM</Noteroom>
                    <SafeAreaView style={{ marginTop: "7%", paddingLeft: "6%", paddingRight: "6%", paddingBottom: "10%" }}>
                        <Emailzone>
                            <StyledTextInput 
                                style={{ color: "white" }}
                                onChangeText={onChangename}
                                value={name}
                                placeholder="Seu nome"
                            />
                        </Emailzone>
                        <Emailzone>
                            <StyledTextInput
                                style={{ color: "white" }}
                                onChangeText={onChangetelefone}
                                value={telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}
                                maxLength={15}
                                placeholder="Telefone"
                                keyboardType="numeric"
                            />
                        </Emailzone>
                        <Emailzone>
                            <StyledTextInput
                                style={{ color: "white" }}
                                onChangeText={onChangeemail}
                                value={email}
                                placeholder="Email"
                                

                            />
                        </Emailzone>
                        <Emailzone>
                            <StyledTextInput
                                style={{ color: "white" }}
                                onChangeText={onChangepassword}
                                value={password}
                                placeholder="Senha"
                                secureTextEntry
                            />
                        </Emailzone>
                    </SafeAreaView>
                    <Wrapper>
                        <TextFuncao>Selecione sua Função</TextFuncao>
                        <CheckBoxContainer>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                    setChecked2(false);
                                    setChecked3(false);
                                }}
                            />
                            <TextCheck>
                                Estudante
                            </TextCheck>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <Checkbox
                                status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked2(!checked2);
                                    setChecked(false);
                                    setChecked3(false);
                                }}
                            />
                            <TextCheck>
                                Acadêmico
                            </TextCheck>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <Checkbox
                                status={checked3 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked3(!checked3);
                                    setChecked(false);
                                    setChecked2(false);
                                }}
                            />
                            <TextCheck>
                                Professor
                            </TextCheck>
                        </CheckBoxContainer>
                        <ButtonContainer>
                            <SuperButton
                                onPress={createUser}
                                text="Cadastrar-se"
                                color="#60169A"
                            />
                        </ButtonContainer>
                        <TextTenhoConta>
                            Já tem uma conta?<TextEntrar onPress={handleNavigationSignIn}> Entrar</TextEntrar>
                        </TextTenhoConta>
                    </Wrapper>
                </Container>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}