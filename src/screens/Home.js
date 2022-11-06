import { ActivityIndicator, Image, ScrollView, View, StyleSheet, Pressable, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import Text from '../components/text/Text'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectStatus } from '../store/productSlice'
import BannerTitle from '../components/BannerTitle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
const width = useWindowDimensions();

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

  const CatagoryBox = ({image, title, onPress}) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          marginVertical: spacing[8],
          marginHorizontal: spacing[5],
          borderRadius: spacing[4],
          alignItems: 'center',
          padding: spacing[5]
        }}>
        <Image source={image} style={{ top: -60, width: width-20}} />
        <View style={{ justifyContent: 'center', alignItems: 'center', top: -50 }}>
          <Text preset='h4'>{title}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: spacing[5] }}>
          <Text preset='title' style={{ marginRight: spacing[3] }} >SHOP</Text>
          <AntDesign name="right" size={24} color={colors.darkOrange} />
        </View>
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView >
        <BannerTitle />
        <View style={{ backgroundColor: colors.black, }}>
          <Image style={styles.img} resizeMode='contain' source={require("../../assets/Images/headphone.png")} />
        </View>
        <View style={{ position: 'absolute', top: 220, left: 0, right: 0, alignItems: 'center' }}>
          <Text preset='h1' style={{ color: 'white', }}>WELCOME</Text>
          <Text preset='overline' style={{ color: 'white', padding: spacing[5], textAlign: 'center' }}>Experience natural & smooth audio quality made for the passionate music enthusist. </Text>
        </View>
        {/* Catagiry */}
        <View>
          <CatagoryBox title="HEADPHONES" image={require("../../assets/Images/headphone1.jpg")} onPress={()=> {console.log('ok')}} />
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
    height: 550
  },
  catImg:{
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 250
  }
})