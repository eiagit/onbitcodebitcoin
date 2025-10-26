import react from "react";
import { View, Text, Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"
import styles from "./styles"
export default function HistoryGraphics(props) {
    return (

        <View style={styles.contentGraphic}>
            <LineChart

                data={{
                    labels: [],
                    datasets: [
                        {
                            data: props.coinsList
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                withVerticalLine={"false"}
                yLabelsOffset={"1"}
                withVerticalLabels={"false"}
                chartConfig={{
                    backgroundColor: "#ca5e00ff",
                    backgroundGradientFrom: "#bd6800ff",
                    backgroundGradientTo: "#ffab2eff",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "1",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}

            />
        </View>
    )
}

/*

*/