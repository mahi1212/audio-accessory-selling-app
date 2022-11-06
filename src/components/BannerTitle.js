import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/Text'
import { colors } from '../theme/colors'
import { typography } from '../theme/typography'

export default function BannerTitle() {
  return (
    <View style={styles.container}>
      <Text preset='h2' style={styles.title}>mysounds</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 60,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: 'white',
        fontFamily: typography.primary
    }
})