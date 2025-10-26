import react from "react";
import {View,Text,TouchableOpacity,Image } from "react-native"
import styles from "./styles"
export default function QuotationList (props){
    const imagem = require("../../../img/bitcoin.png")
    return(
           <View style={styles.Component}>
            <View style={styles.bitcoinArea}>
                <View style={styles.imageContainger}>
                    <Image source={imagem} style={[styles.image, {resizeMode: 'cover'}]} alt="BitCoin"/>
                    <Text style={styles.dataCotacao}>{props.data}</Text>                    
                </View>
                <View style={styles.bitconinDireita}>
                    <Text style={styles.preco}>{props.valor}</Text>
                </View>
            </View>

           </View>

    )
}