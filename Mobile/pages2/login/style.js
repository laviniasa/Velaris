import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'purple',
    },
    
    header: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        marginTop: "50%"
    },

    logo: {
        width: "50%",
        height: "60%",
    },

    texto: {
        fontSize: 20,
        marginTop: -95,
        color: 'white',
        textAlign: 'center'
    },

    input: {
       width: 250,
       height: 40,
       marginTop: 20,
       borderRadius: 5,
       backgroundColor: "white",
       padding: 5
    },

    login: {
        width: 60,
        borderRadius: 5,
        height: 30,
        marginTop: 10,
        alignItems: "center",
        // border: "1px solid white",
        justifyContent: "center",
    },

    text: {
        fontSize: 17,
        color: 'white',
        // textAlign: 'center',
        
    },

    cad: {
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
        // border: "1px solid white"
    },
    view: {
        padding: 10,
        alignItems: 'center',
        margin: 5
    }
})