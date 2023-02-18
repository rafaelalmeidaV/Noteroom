import { TextInput, SafeAreaView } from "react-native";
import { TextEntrar, TextTenhoConta, ButtonContainer, TextCheck, Wrapper, Container, Emailzone, StyledTextInput, CheckBoxContainer, TextFuncao } from "./stylescreate";
import { useState } from "react";
import { Checkbox } from "react-native-paper";
import SuperButton from "../../components/Button";


export default function CreateAccount({ navigation }) {

    function handleNavigationSignIn(){
        navigation.navigate('SignIn')
    }
    const [name, onChangename] = useState('');
    const [telefone, onChangetelefone] = useState('');
    const [email, onChangeemail] = useState('');
    const [senha, onChangesenha] = useState('');
    const [checked, setChecked] = useState(false);
    return (
        <Container>
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
                        secureTextEntry
                    />
                </Emailzone>
                <Emailzone>
                    <StyledTextInput
                        onChangeText={onChangeemail}
                        value={email}
                        placeholder="Email"
                        secureTextEntry
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
                        }}
                    />
                    <TextCheck>
                        Estudante
                    </TextCheck>
                </CheckBoxContainer>
                <CheckBoxContainer>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <TextCheck>
                        Acadêmico
                    </TextCheck>
                </CheckBoxContainer>
                <CheckBoxContainer>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <TextCheck>
                        Professor
                    </TextCheck>
                </CheckBoxContainer>
                <ButtonContainer>
                    <SuperButton
                        text="Cadastrar-se"
                        color="#60169A"
                    />
                </ButtonContainer>
                <TextTenhoConta>
                    Já tem uma conta?<TextEntrar onPress={handleNavigationSignIn}> Entrar</TextEntrar>
                </TextTenhoConta>
            </Wrapper>
        </Container>
    )
}