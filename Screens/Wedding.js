import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NotificationServices, requestUserPermission } from './Notification';

const Wedding = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationServices();
    
  }, [])
  return (
    <>
      <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
      
      <View style={{ height: '100%', width: '100%' }}>
        <WebView source={{ uri: 'https://Clickawedding.com/' }} />
      </View>
    </>
  )
}

export default Wedding

const styles = StyleSheet.create({})