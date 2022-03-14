import * as React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function perfil({ navigation }) {
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
                        <Image style={style.perfil} source={require('../../assets/perfil.png')}></Image>
                    </View>
                    <Text style={style.textin}>Nome: </Text>
                    <Text style={style.textin}>Autor: </Text>
                    <Text style={style.textin}>LIVROS ESCRITOS POR VOCÊ</Text>
                    <View style={style.org}>
                        <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro") }} style={style.card1}>
                            <Text >Ola</Text>
                        </TouchableOpacity>
                        <View style={style.card1}>

                        </View>
                        <View style={style.card1}>

                        </View>
                    </View>
                    <Text style={style.textin}>LIVROS NA SUA BIBLIOTECA</Text>
                    <View style={style.org}>
                        <View style={style.card1}>
                        </View>
                        <View style={style.card1}>

                        </View>
                        <View style={style.card1}>

                        </View>
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
                </ScrollView>    
            </View>
        </View>    
    );
}