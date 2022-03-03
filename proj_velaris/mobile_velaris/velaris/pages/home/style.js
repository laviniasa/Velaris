import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
    },
    card : {
        marginBottom: 10,
        width: "95%",
        height: "20%",
        border: "1px solid #A9A9A9",
        marginTop: 10,
        borderRadius: 5,

    },

    input: {
        width: "100%",
        height: "100%",
    },

    header: {
        width: "100%",
        height: "10%",
        backgroundImage: "linear-gradient(to bottom, rgb(10, 10, 10), purple)"
    },

    footer: {
       width: "100%",
       height: "7%",
       backgroundImage: "linear-gradient(to bottom, rgb(10, 10, 10), purple)"  
    }
});