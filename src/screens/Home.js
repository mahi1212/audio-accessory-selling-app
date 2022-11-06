import { ActivityIndicator, Image, ScrollView, View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Text from '../components/text/Text'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectStatus } from '../store/productSlice'
import BannerTitle from '../components/BannerTitle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

export default function Home() {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  console.log(status)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [])

  if (status === 'loading') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView >
        <BannerTitle />
        <View style={{ backgroundColor: colors.black, }}>
          <Image style={styles.img} resizeMode='contain' source={require("../../assets/Images/headphone.png")} />
        </View>
        <View style={{ position: 'absolute', top: 250, left: 0, right: 0, alignItems: 'center'}}>
          <Text preset='h1' style={{color: 'white',}}>WELCOME</Text>
          <Text preset='overline' style={{color: 'white', padding: spacing[5], textAlign: 'center'}}>Experience natural & smooth audio quality made for the passionate music enthusist. </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 600
  }
})