import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function ElevatedCards() {
  return (
    <View >
      <Text style= {styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style = {styles.container}>
        <View style ={[styles.card, styles.cardElavated]}>
            <Text>Tap</Text>
        </View>
        <View style ={[styles.card, styles.cardElavated]}>
            <Text>me</Text>
        </View>
        <View style ={[styles.card, styles.cardElavated]}>
            <Text>To</Text>
        </View>
        <View style ={[styles.card, styles.cardElavated]}>
            <Text>Scroll</Text>
        </View>
        <View style ={[styles.card, styles.cardElavated]}>
            <Text>more...</Text>
        </View>
        <View style ={[styles.card, styles.cardElavated]}>
            <Text>!!!</Text>
        </View>
      </ScrollView>
    </View>
  )
}
export default ElevatedCards
const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8
    },
    container:{
        padding: 8,
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 8
    },
    cardElavated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: '#EF5354'
    }
})