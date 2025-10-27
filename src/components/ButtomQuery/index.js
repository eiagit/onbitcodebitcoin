import react, { Fragment } from "react";
import {View,Text,TouchableOpacity,ScrollView } from "react-native"
import styles from "./styles"
export default function ButtomQuery (props){

    return(
            <TouchableOpacity style={styles.buttomQuery} onPress={()=>{props.uDays(props.dias)}}>
               <Text style={styles.textButtomQuery}>{props.text}</Text>
            </TouchableOpacity>


    )
}