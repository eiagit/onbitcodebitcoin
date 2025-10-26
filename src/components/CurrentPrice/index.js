import react from "react";
import {View,Text } from "react-native"
import styles from "./styles"
export default function CurrentPrice (props){

    return(
        <View style={styles.HeaderPrice}>
            <Text style={styles.CurrentPrice}>${props.price}</Text>
            <Text style={styles.SubTitle}>Ultima cotação</Text>
        </View>
    )
}