import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import style from './style.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    const [cadastro, setCadastro] = useState(false);

    const autenticar = () => {
        let user = {
            email: email,
            senha: senha
        }

        fetch('http://10.87.207.22:3000/login', {
            "method":"POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user),
        })
        .then(resp => { 
            if(!(resp.status == 404)){
                return resp.json();
            }
        })
        .then(data => {
            console.log(data)
            if(data[0] != undefined){
                AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
                navigation.navigate("Container");
            }else{
                ToastAndroid.show('Email ou Senha Inválidos', ToastAndroid.SHORT);
            }
        })
    }

    const habilitarCadastro = () => {
        setCadastro(true);
    }

    const cadastrar = () => {
        let user = {
            nome: nome,
            email: email,
            senha: senha,
        }

        fetch("http://10.87.207.22:3000/usuario", {
            "method":"POST",
            "headers": {
                "Content-Type":"application/json"
            },
            "body": JSON.stringify(user)
        })
        .then(resp => {
            return resp.json();
        })
        .then( data => {
            console.log(data)
            if(data == undefined) {
                ToastAndroid.show("Falha ao cadastrar", ToastAndroid.SHORT);
                setCadastro(false);
            } else {
                AsyncStorage.setItem('userdata', JSON.stringify(data));
                navigation.navigate("Container");
            }
        });
    }

        return (
            <View style={style.body}>
                <View style={style.header}>
                    <Image style={style.logo} source={require('../../assets/LOGO.png')} />
                </View>
                <Text style={style.texto}>Bem vindos a Velaris Books!</Text>
                <TextInput style={style.input} value={email} onChangeText={setEmail} placeholder={"Email"}/>
                <TextInput style={style.input} value={senha} onChangeText={setSenha} placeholder={"Senha"} secureTextEntry={true}/>

                {
                    (cadastro) ?
                        <View>
                            <TextInput style={style.input} value={nome} onChangeText={setNome} placeholder={"Nome Completo"} />
                            <TouchableOpacity onPress={() => cadastrar() } style={style.view}>
                                <Text style={style.text}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    :
                        <View style={style.view}>
                            <TouchableOpacity style={style.login} onPress={() => autenticar() }>
                                <Text style={style.text}>Login</Text>
                            </TouchableOpacity>

                        
                            <TouchableOpacity style={style.cad} onPress={() => habilitarCadastro() }>
                                <Text style={style.text}>Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        )
}