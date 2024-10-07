import { StyleSheet, Text, View,Linking,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ElevatedCards from './ElevatedCards';

const logoImg = require("@assets/pic.webp")

const ActionCards = () => {
  function openWebsite(websiteLink: string) {
      Linking.openURL(websiteLink);
  }
    return (
    <View>
      <Text style= {styles.headingText}>Blog Card</Text>
      <View style={styles.container}>
        <Text style={styles.body}>This a block of links to provide you an ease of access. Navigate through the Google and Youtube using our On click Interface.</Text>
        <Image 
        source={logoImg}
        style = {styles.imageCard}
        />
        <View style={[styles.container,styles.elevatedCards]}>
        <Text style ={styles.body}>Here are the links!</Text>
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.google.com')}> 
            <Text style={styles.linkText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> openWebsite('https://www.youtube.com')}> 
            <Text style={styles.linkText}>Youtube</Text>
        </TouchableOpacity>
      </View>
      </View>
    
    </View>
  )
}

export default ActionCards

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8
    },
    elevatedCards:{
        backgroundColor: '#CAD5E2',
        borderRadius: 8,
        flexDirection: 'row',    
        
    },
    imageCard:{
    width: 200,
    height: 180,
    borderRadius: 330/2,
    
    },
    body:{
      fontSize: 14,
      padding: 8,
      color: '#242B2E',
      flexDirection: 'column'  
    },
    linkText: {
        color: '#5DA3FA',
        fontSize: 16,
        padding: 8,
        
    },
    container:{
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 8,
        margin: 12,
        borderRadius: 8,
        flex: 1,
        alignItems:'center',
        justifyContent:'space-around'
    }
})