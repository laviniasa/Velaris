import * as React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from './style.js'

export default function Leitura({ navigation }) {
    return (
        <View style={style.body}>
            <View style={style.scroll}>
                <ScrollView>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                            <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                        </TouchableOpacity>
                        <Text style={style.texto}>Leitura</Text>
                        <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                    </View>
                    <View style={style.org}>
                        <Text>Título: </Text>
                        <Text>Autor: </Text>
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
                </ScrollView>
            </View>
        </View>
    );
}