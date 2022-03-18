import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
    },

    card1 : {
        marginBottom: 30,
        width: "60%",
        height: 50,
        marginTop: 10,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center"
    },

    card: {
        marginBottom: 10,
        width: "95%",
        height: 800,
        marginTop: 10,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center"
    },

    input: {
        width: "100%",
        height: "100%",
    },

    header: {
        width: "100%",
        height: "8%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'purple'
    },


    footer: {
        width: "100%",
        height: 210,
        backgroundColor: "purple",
    },    

    logo: {
        marginTop: 18,
        padding: 0,
        width: 70,
        height: 70,
    },
    
    menu: {
        width: 40,
        height: 40,
        marginLeft: 10,
        marginTop: 20
    },

    text: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center'
    },

    face: {
        width: 50,
        height: 50
    },

    twitter: {
        width: 50,
        height: 50
    },

    insta: {
        width: 50,
        height: 50
    },

    imagefooter: {
        width: "100%",
        height: "15%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        marginTop: "8%",
        marginBottom: "8%"
    },

    env : {
        color: "black",
        width: 60,
        height: 30,
        fontSize: 20,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end"
    },

    texto: {
        fontSize: 20,
        marginTop: 15,
        color: 'white',
        textAlign: 'center'
    }
});