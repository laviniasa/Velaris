import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import style from './style.js'

export default function DadosLivro({ navigation }) {
    return (
        <View style={style.body}>
            <View style={style.header}>
                <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                <Text style={style.text}>Informações do Livro</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Leitura') }}>
                    <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={style.org}>
                
                <View style={style.card1}>
                </View>
                <Text>Título: </Text>
                <Text>Autor: </Text>
                <Text>Gênero: </Text>
            </View>
            <View style={style.card}>
            </View>
            <View style={style.footer}>
                <Text style={style.text}>Entre em contato conosco por nossas redes sociais!</Text>
                <View style={style.imagefooter}>
                    <Image style={style.face} source={require('../../assets/facebook.png')}></Image>
                    <Image style={style.twitter} source={require('../../assets/twitter.png')}></Image>
                    <Image style={style.insta} source={require('../../assets/instagram.png')}></Image>
                </View>
                <Text style={style.text}>Developed by Elian, Larissa e Lavínia</Text>
            </View>
        </View>
    );
}         