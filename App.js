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
    // ACESSE O SITE DA API E CLOQUE A CHAVE NO LUGAR INDICADO
    // return `https://data-api.coindesk.com/index/cc/v1/historical/days?market=cadli&instrument=BTC-USD&limit=${dia}&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&api_key=%20%20%20%20const%20apikey=COLOQUE AQUI A SUA CHAVE DA APP https://developers.coindesk.com/documentation/data-api/introduction`
    
};

async function dBC(url) {
    let response = await fetch(url)
    let apiResponse = await response.json()
    let selectData = await apiResponse.Data
    return ((Object.entries(await selectData).map(([id, data]) => {
        return { "id": id, "data": (new Date(data.TIMESTAMP * 1000)).toLocaleDateString("pt-BR"), "valor": data.LAST_MESSAGE_VALUE }
    })))
};

async function dBG(url) {
    let response = await fetch((url))
    let apiResponse = await response.json()
    let selectData = await apiResponse.Data
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
            setAtualValue(coinsGraphicList.pop())            
        })
        if (updateData) setUpdateData(false)
    }, [days])

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
