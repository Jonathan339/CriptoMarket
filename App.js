import React, {useEffect} from 'react'
import { View, Text } from 'react-native'

const loadData = async () =>{
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  const data = await res.json()
  console.log(data)

}

const App = () => {
  useEffect(() => {
    console.log("Cargando...");
    let data = loadData()
    }, []);



  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default App
