import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
    },

    card: {
        marginBottom: 30,
        width: "95%",
        height: 150,
        marginTop: 20,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 2,
        alignSelf: "center",
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
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
       height: 200,
       alignItems: 'center',
       justifyContent: 'space-around',
       backgroundColor: "purple"
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

    enviar: {
        width: 30,
        height: 30,
        marginLeft: 10
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
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    like: {
        width: 30,
        height: 30,
    },

    deslike: {
        width: 30,
        height: 30,
    },

    scroll: {
        flex: 1,
    },

    menu: {
        marginLeft: 10,
        width: 40,
        height: 40,
        marginTop: 20
    },

    buscar: {
        backgroundColor: 'white',
        width: 210,
        padding: 5,
        top: 10
    }
});