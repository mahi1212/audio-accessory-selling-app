import { View, } from 'react-native'
import React from 'react'
import Text from '../components/text/Text'

export default function Home() {
  return (
    <View style={{backgroundColor: 'green'}}>
      <Text preset='h3' style={{color: '#000'}}>Home </Text>
    </View>
  )
}