import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js'

export default function DadosLivro({ navigation }) {
    const [capa, setCapa] = useState("");

    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const data = await AsyncStorage.getItem('userdata');
                if(data != undefined) {
                    let obj = JSON.parse(data);
                    setCapa({uri:obj.capa});
                }
            } catch (error) {
            }
        };
        _retrieveData();
    }, []);

    useEffect(() => {
        fetch('http://10.87.207.22:7000/dados', {
            "method": "GET",
            "headers": {
                "Content-Type":"application/json"
            }
        })
    }) 

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
                            <Image style={style.harry} source={require('../../assets/harry.png')}></Image>
                        </View>
                        <Image style={style.estrela} source={require('../../assets/avaliacao.png')}></Image>
                        <Text>Titulo: Harry Potter e o Cálice de Fogo </Text>
                        <Text>Autor(a): J.K ROWLING</Text>
                        <Text>Gênero: Realismo Magico</Text>
                    </View>
                    <View style={style.card}>
                        <Text>1 – A casa dos Riddle</Text>
                        <Text>2 – A cicatriz</Text> 
                        <Text>3 – O convite</Text> 
                        <Text>4 - De Volta à Toca</Text>
                        <Text>5 - As Gemialidades Weasley</Text>
                        <Text>6 – A chave do portal</Text>
                        <Text>7 – Bagman e Crouch</Text>
                        <Text>8 – A Copa Mundial de Quadribol</Text>
                        <Text>9 – A Marca Negra</Text>
                        <Text>10 – Caos no Ministério</Text>
                        <Text>11 – A Bordo do Expresso de Hogwarts</Text>
                        <Text>12 – O Torneio Tribruxo</Text>
                        <Text>13 – Olho-Tonto Moody</Text>
                        <Text>14 – As Maldições Imperdoáveis</Text>
                        <Text>15 – Beauxbatons e Durmstrang</Text>
                        <Text>16 – O Cálice de Fogo</Text>
                        <Text>17 – Os quatro campeões</Text>
                        <Text>18 – A pesagem das varinhas</Text>
                        <Text>19 – O Rabo-Córneo Húngaro</Text>
                        <Text>20 – A Primeira tarefa</Text>
                        <Text>21 – A Frente de Liberação dos Elfos Domésticos</Text>
                        <Text>22 – A tarefa inesperada</Text>
                        <Text>23 – O Baile de Inverno</Text>
                        <Text>24 – O furo jornalístico de Rita Skeeter</Text>
                        <Text>25 – O ovo e o olho</Text>
                        <Text>26 – A segunda tarefa</Text>
                        <Text>27 - A volta de Almofadinhas</Text>
                        <Text>28 - A loucura do Sr. Crouch</Text>
                        <Text>29 - O sonho</Text>
                        <Text>30 - A Penseira</Text>
                        <Text>31 - A terceira tarefa</Text>
                        <Text>32 - Osso, carne e sangue</Text>
                        <Text>33 - Os Comensais da Morte</Text>
                        <Text>34 - Priori Incantatem</Text>
                        <Text>35 - Veritaserum</Text>
                        <Text>36 - Os caminhos se separam</Text>
                        <Text>37 - O Recomeço</Text>
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