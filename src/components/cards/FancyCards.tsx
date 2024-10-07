import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const logoImg = require("@assets/pic.webp")
function FancyCards() {
  return (
    <View>
      <Text style= {styles.headingText}>Trending Cards</Text>
      <View style= {[styles.card,styles.cardElavted]}>
        <Image
        source={{
            uri:"https://images.unsplash.com/2/10.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
        style= {styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Peace Town</Text>
          <Text style={styles.cardLabel}>Heaven own Valley</Text>
          <Text style={styles.cardDescription}>This a dream valley within the mountains.</Text>
          <Text style={styles.cardFooter}>A daydream away</Text>
        </View>
      </View>
    </View>
  )
}
export default FancyCards 
const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card:{
      width: 330,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16
    },
    cardElavted:{
      backgroundColor:"#FFFFFF",
      elevation: 3,
      shadowOffset:{
        width: 1,
        height: 1
      }
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody:{
      flex:1,
      flexGrow: 1,
      paddingHorizontal: 12
    },
    cardTitle:{
      color:'#000000',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4
    },
    cardLabel:{
      color:'#000000',
      fontSize: 14,
      marginBottom: 6
    },
    cardDescription:{
      color:'#242B2E',
      fontSize: 12,
      marginBottom:12,
      marginTop: 6,
      flexShrink: 1
    },
    cardFooter:{
      color:'#000000'
    }
})