import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    Component :{
        width:"350",
        height:60,
        backgroundColor:"#250404ff",
        marginLeft:"3%",
        marginBottom:"5%",
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        padding:'20',
        
    },
    bitcoinArea  : {
        flex :1,
        width :"100%",
        height:"auto",
        flexDirection:"row",
        justifyContent:"space-around",
       alignItems:"center" ,
       
    },
    image :{
    height: 40,
    width: 40,
    },
    imageContainger:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    }    ,
    bitconinDireita:{ 
        width:100,
        height:"auto",
    },
  preco:{
    fontSize:15,
    fontWeight:"bold",
    color : "#fff"
  },
  dataCotacao:{
    fontSize:15,
    fontWeight:"bold",
    color : "#fff"
  },
})

export default styles