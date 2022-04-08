import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Perfis({ navigation, route }) {
    const {foto, nome, email} = route.params

return (
    <View style={style.body}>
        <View style={style.scroll}>
            <ScrollView>
                <View style={style.header}>
                    <TouchableOpacity  onPress={() => { navigation.openDrawer() }}>
                        <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                    </TouchableOpacity>
                    <Text style={style.texto}>Perfil de {nome}</Text>
                    <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                </View>
                <View style={style.card}>
                    <Image style={style.perfil} source={{uri:foto}} ></Image>
                </View>
                <Text style={style.textin}>Nome: {nome}</Text>
                <Text style={style.gmail}>Email: {email}</Text>
                <Text style={style.textin}>LIVROS NA SUA BIBLIOTECA</Text>
                <View style={style.org}>
                    <ScrollView style={style.lados} horizontal={true}>
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
                                <Image style={style.harry} source={require('../../assets/harry.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={style.card1}>
                            <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                                <Image style={style.harry} source={require('../../assets/vorazes.png')}></Image>
                            </TouchableOpacity>
                        </View>   
                    </ScrollView>
                </View>
                </ScrollView> 
                <View style={style.footer}>
                    <Text style={style.text}>Nos siga nas redes sociais !</Text>
                    <View style={style.imagefooter}>
                        <Image style={style.face} source={require('../../assets/facebook.png')}></Image>
                        <Image style={style.twitter} source={require('../../assets/twitter.png')}></Image>
                        <Image style={style.insta} source={require('../../assets/instagram.png')}></Image>
                    </View>
                    <Text style={style.text}>Developed by Elian, Larissa e Lavínia</Text>
                </View>   
        </View>
    </View>    
);
}