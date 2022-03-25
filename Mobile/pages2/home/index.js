import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import perfil from '../perfil/index.js';

export default function Home({ navigation }) {
  
  const [like, setLike] = useState("");
  const [deslike, setDeslike] = useState("");

  const [buscar, setBuscar] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const [novoComentario, setNovoComentario] = useState("");
  const [comentarios, setComentarios] = useState({comentarios:[]});

  useEffect(() => {
    fetch('http://10.87.207.22:3000/usuario')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredData(responseJson);
        setMasterData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const buscarFilter = (text) => {
    if (text) {
      const newData = masterData.filter(
        function (item) {
          if (item.title) {
            const itemData = item.title.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const addComentario = () => {
    let data = {
      "comentario":novoComentario,
      "like":0,
    }

    setComentarios({ comentarios: [...comentarios.comentarios, data] });
  }

  const CampoComentario = ({data, index}) => {
    const likear = (tipo) => {
      let temp = comentarios.comentarios;
      temp[index].like = tipo;
      setComentarios({ comentarios: temp });
    }

    return(
      <View style={style.card} key={index}>
        <View style={{width: "100%",height: "80%", alignSelf: "center"}}>
          <Text style={{paddingLeft: 5, paddingTop: 5}}>{data.comentario}</Text>
        </View>
        <View style={{width: "100%" ,flexDirection: "row", justifyContent: "space-evenly"}}>
          <AntDesign name="like2" size={30} onPress={() => likear(1)} color={data.like == 1 ? "darkmagenta" : "black"} />
          <AntDesign name="dislike2" size={30} onPress={() => likear(2)} color={data.like == 2 ? "red" : "black"} />
        </View>
      </View>
    )
  }

  return (
    <View style={style.body}>
      <View style={style.scroll}>
        <ScrollView>
          <View style={style.header}>
            <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
              <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
            </TouchableOpacity>
            <TextInput value={buscar} onChangeText={(perfil) => setBuscar(perfil)} style={style.buscar} placeholder='Pesquise'>
            </TextInput>
            <Image style={style.procurar} source={require("../../assets/procurar.png")}></Image>
            <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
          </View>
          <View style={style.card}>
            <TextInput multiline
              value={novoComentario}
              onChangeText={setNovoComentario}
              numberOfLines={10}
              maxLength={300}
              style={style.input}>
            </TextInput>
          </View>
          <TouchableOpacity onPress={addComentario}>
            <Image style={style.enviar} source={require("../../assets/enviar.png")}></Image>
          </TouchableOpacity>
          {
            comentarios.comentarios.map((item, index) => {
              return(<CampoComentario index={index} data={item}/>)
            })
          }
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
    </View>
  );
}