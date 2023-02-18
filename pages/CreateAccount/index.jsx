import { TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView } from "react-native";
import { Noteroom, TextEntrar, TextTenhoConta, ButtonContainer, TextCheck, Wrapper, Container, Emailzone, StyledTextInput, CheckBoxContainer, TextFuncao } from "./stylescreate";
import { useState } from "react";
import { Checkbox } from "react-native-paper";
import SuperButton from "../../components/Button";
import UserCRUD, { User } from "../../services/database/user";


export default function CreateAccount({ navigation }) {
    const [name, onChangename] = useState('');
    const [telefone, onChangetelefone] = useState('');
    const [email, onChangeemail] = useState('');
    const [senha, onChangesenha] = useState('');

    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const bd = new UserCRUD();

    async function createUser() {
        const user = new User(name, telefone, email, senha);
        await bd.create(user)
        //printar bd
        await bd.readAll().then((data) => {
            console.log(data);
        })
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
                                onChangeText={onChangename}
                                value={name}
                                placeholder="Seu nome"
                            />
                        </Emailzone>
                        <Emailzone>
                            <StyledTextInput
                                onChangeText={onChangetelefone}
                                value={telefone}
                                placeholder="Telefone"

                            />
                        </Emailzone>
                        <Emailzone>
                            <StyledTextInput
                                onChangeText={onChangeemail}
                                value={email}
                                placeholder="Email"

                            />
                        </Emailzone>
                        <Emailzone>
                            <StyledTextInput
                                onChangeText={onChangesenha}
                                value={senha}
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