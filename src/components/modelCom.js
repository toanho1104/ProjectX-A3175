import React, { useState, useEffect, useRef } from 'react'
import {
  View, Dimensions, Modal, Animated, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, TouchableWithoutFeedback,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'

const { width } = Dimensions.get('window')
const rate = width / 375
const ModelCom = ({
  children, visible, handleHide, style,
}) => {
  const aniShowModal = useRef(new Animated.Value(600)).current
  const [isShow, setShow] = useState(false)

  useEffect(() => {
    if (visible) {
      handleShowModal()
    } else {
      handleHideModal()
    }
  }, [visible])
  const handleShowModal = () => {
    setShow(visible)
    Animated.spring(aniShowModal, {
      toValue: 0,
      tension: 60,
      useNativeDriver: true,
    }).start()
  }
  const handleHideModal = () => {
    Animated.timing(aniShowModal, {
      duration: 300,
      toValue: 600,
      useNativeDriver: true,
    }).start(() => { setShow(visible) })
  }
  const handleHideMD = () => {
    handleHide()
  }

  // const tranY = aniShowModal.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [600, 0],
  // })

  return (
    <Modal
      visible={isShow}
      transparent

    >
      <TouchableWithoutFeedback
        style={{}}
        onPress={handleHideMD}
        disabled={!handleHide}
      >
        <View style={styles.container}>
          <TouchableOpacity disabled>
            <Animated.View
              style={{ transform: [{ translateY: aniShowModal }], ...style }}
            >
              {children}
            </Animated.View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ModelCom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
})
