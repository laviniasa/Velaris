import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js'

export default function DadosLivro({ navigation }) {
    // const [capa, setCapa] = useState("");

    // useEffect(() => {
    //     const _retrieveData = async () => {
    //         try {
    //             const data = await AsyncStorage.getItem('userdata');
    //             if(data != undefined) {
    //                 let obj = JSON.parse(data);
    //                 setCapa({uri:obj.capa});
    //             }
    //         } catch (error) {
    //         }
    //     };
    //     _retrieveData();
    // }, []);

    // useEffect(() => {
    //     fetch('http://10.87.207.22:3000/dados', {
    //         "method": "GET",
    //         "headers": {
    //             "Content-Type":"application/json"
    //         }
    //     })
    // }) 

    return (
        <View style={style.body}>
            <View style={style.scroll}>
                <ScrollView>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                            <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                        </TouchableOpacity>
                        <Text style={style.text}>Informações do Livro</Text>
                        <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
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