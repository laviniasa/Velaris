import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
    },
    
    org: {
        width: "95%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },

    card : {
        marginBottom: 10,
        width: "95%",
        height: "75%",
        border: "1px solid #A9A9A9",
        borderRadius: 5,

    },

    input: {
        width: "100%",
        height: "100%",
    },

    header: {
        width: "100%",
        height: "10%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundImage: "linear-gradient(to bottom, rgb(10, 10, 10), darkmagenta)"
    },

    footer: {
       width: "100%",
       height: "20%",
       alignItems: 'center',
       justifyContent: 'space-around',
       backgroundImage: "linear-gradient(to bottom, rgb(10, 10, 10), purple)"  
    },

    logo: {
        width: 100,
        height: "100%",
    },

    menu: {
        width: 50,
        height: 50,
        marginRight: 20,
    },

    text: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Cochin',
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
    }
})