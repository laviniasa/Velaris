import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil({ navigation }) {

    const [perfil, setPerfil] = useState("");
    const [email, setEmail] = useState("");
    const [imgPerfil, setImgPerfil] = useState(require('../../assets/perfil.png'));
    const [capa, setCapa] = useState("");

    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const data = await AsyncStorage.getItem('userdata');
                if(data != undefined) {
                    let obj = JSON.parse(data);
                    setPerfil(obj);
                    setEmail(obj);
                    setImgPerfil({uri:obj.foto});
                    setCapa({uri:obj.capa});
                }
            } catch (error) {
            }
        };
        _retrieveData();
    }, []);
    
    // useEffect(() => {
    //     fetch('http://10.87.207.22:7000/dados', {
    //         "method": "GET",
    //         "headers": {
    //             "Content-Type":"application/json"
    //         }
    //     })
    // })    
    // .then(resp => { return resp.json(); })
    // .then(data => {setCapa(data); })   

    return (
        <View style={style.body}>
            <View style={style.scroll}>
                <ScrollView>
                    <View style={style.header}>
                        <TouchableOpacity  onPress={() => { navigation.openDrawer() }}>
                            <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                        </TouchableOpacity>
                        <Text style={style.texto}>Sua Conta</Text>
                        <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                    </View>
                    <View style={style.card}>
                        <Image style={style.perfil} source={imgPerfil} ></Image>
                    </View>
                    <Text style={style.textin}>Nome: {perfil.nome}</Text>
                    <Text style={style.textin}>Email: {email.email}</Text>
                    <Text style={style.textin}>LIVROS ESCRITOS POR VOCÊ</Text>
                    <View style={style.org}>
                        <ScrollView style={style.lados} horizontal={true}>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/capa.png')}></Image>
                                </TouchableOpacity>
                            </View>    
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/espaço.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/fantasia.png')}></Image>
                                </TouchableOpacity>    
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/acao.png')}></Image>
                                </TouchableOpacity>    
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/fantasy.png')}></Image>
                                </TouchableOpacity>    
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/capaa.png')}></Image>
                                </TouchableOpacity>    
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/aventura.png')}></Image>
                                </TouchableOpacity>    
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/espaco.png')}></Image>
                                </TouchableOpacity>    
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={style.textin}>LIVROS NA SUA BIBLIOTECA</Text>
                    <View style={style.org}>
                        <ScrollView style={style.lados} horizontal={true}>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/harry.png')}></Image>
                                </TouchableOpacity> 
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/wars.png')}></Image> 
                                </TouchableOpacity>
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/dracula.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/anel.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/raios.png')}></Image>
                                </TouchableOpacity>
                            </View> 
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/crepusculo.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/vorazes.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={style.card1}>
                                <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                    <Image style={style.harry} source={require('../../assets/pijama.png')}></Image>
                                </TouchableOpacity>
                            </View>   
                        </ScrollView>
                    </View>
                    <View style={style.footer}>
                        <Text style={style.text}>Nos siga nas redes sociais !</Text>
                        <View style={style.imagefooter}>
                            <Image style={style.face} source={require('../../assets/facebook.png')}></Image>
                            <Image style={style.twitter} source={require('../../assets/twitter.png')}></Image>
                            <Image style={style.insta} source={require('../../assets/instagram.png')}></Image>
                        </View>
                        <Text style={style.text}>Developed by Elian, Larissa e Lavínia</Text>
                    </View>
                </ScrollView>    
            </View>
        </View>    
    );
}