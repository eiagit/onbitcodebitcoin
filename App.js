import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphics from './src/components/HistoryGraphics';
import QuotationList from './src/components/QuotationList';

function zeroEsqueda(props) {
    if (props <= 9) {
        return "0" + props
    } return props
};
function url(props) {
    var dia = zeroEsqueda(props)
    // return `https://data-api.coindesk.com/index/cc/v1/historical/days?market=cadli&instrument=BTC-USD&limit=${dia}&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&api_key=%20%20%20%20const%20apikey=COLOQUE AQUI A SUA CHAVE DA APP https://developers.coindesk.com/documentation/data-api/introduction`
    return `https://data-api.coindesk.com/index/cc/v1/historical/days?market=cadli&instrument=BTC-USD&limit=${dia}&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&api_key=%20%20%20%20const%20apikey=%20%2224601e3365f9dbdb0a7ae497c46acde45d41e76b299e87463210a1fff03e67f6%22`
};

async function dBC(url) {
    var dataAtual = new Date()
     console.log('antes do erro')   
    let dados = await fetch((url)).json().Data
  //  let apiResponse = await response.json()
 //   let selectData = apiResponse.Data
    console.log('passou do errro')
     console.log(await dados)  
    return ((Object.entries(await dados).map(([id, data]) => {
        return { "id": id, "data": (new Date(data.TIMESTAMP * 1000)).toLocaleDateString("pt-BR"), "valor": data.LAST_MESSAGE_VALUE }
    })))
};

async function dBG(url) {
     
    var dataAtual = new Date()
    let response = await fetch((url))
    let apiResponse = await response.json()
    let selectData = apiResponse.Data
     
    return ((Object.entries(selectData).map(([id, data]) => {
        return data.LAST_MESSAGE_VALUE
    })))
};

export default function App() {
    const [coinsList, setCoinList] = useState([])
    const [coinsGraphicList, setCoinsGraphicList] = useState([0])
    const [days, setDays] = useState(7)
    const [updateData, setUpdateData] = useState(true)
    const [atualValue,setAtualValue] = useState(0)

    function updateDay(number) {
        setDays(number)
        setUpdateData(true)
    }

    useEffect(() => {
        dBC(url(days)).then((data) => {
            setCoinList(data)
        })
        dBG(url(days)).then((resposta) => {
            setCoinsGraphicList(resposta)
        })
        if (updateData) setUpdateData(false)
        setAtualValue(coinsGraphicList.pop())
    }, [])

    return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar
                backgroundColor='#ff1d1dff'
                barStyle={'default'}
                style={"paddingBottom=10"}
            />
            <CurrentPrice price ={atualValue}/>
            <HistoryGraphics coinsList={coinsGraphicList} />
            <QuotationList uDays={updateDay} coinsList={coinsList} />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000ff',
        alignItems: 'center',
        paddingTop: Platform.OS == "android" ? 40 : 0,
    },
});
