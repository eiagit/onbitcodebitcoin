import react, { Fragment } from "react";
import {View,Text,ScrollView,FlatList } from "react-native"
import styles from "./styles"
import ButtomQuery from "../ButtomQuery";
import QuotationItens from "./QuotationItens"
export default function QuotationList (props){
    return(
        <Fragment>
           <View style={styles.Filters}>
                <ButtomQuery text="7D"   dias="7"  uDays={props.uDays}/>
                <ButtomQuery text="15D"  dias="15" uDays={props.uDays}/>
                <ButtomQuery text="30D"  dias="30" uDays={props.uDays}/>
                <ButtomQuery text="60D"  dias="60" uDays={props.uDays}/>
                <ButtomQuery text="90D"  dias="90" uDays={props.uDays}/>
                <ButtomQuery text="120D" dias="120" uDays={props.uDays}/>
           </View>
            <ScrollView horizontal={true}>
                <FlatList
                data={props.coinsList}
                marginBottom="20"
                renderItem={({item})=>{
                    return <QuotationItens data={item.data} valor={item.valor}/>
                }}
                />
            </ScrollView>
        </Fragment>
    )
}