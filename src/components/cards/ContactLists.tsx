import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactLists() {
    const contacts = [
        {id: '1', name: 'Ichigo', phone: '12345678', imageUrl:'https://imgix.ranker.com/list_img_v2/1360/2681360/original/the-best-ichigo-quotes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720'},
        {id: '2', name: 'Luffy', phone: '87654321', imageUrl:'https://miro.medium.com/v2/resize:fit:1400/1*2YvC-WqO7gFkpFzNrqQ6Eg.jpeg'},
        {id: '3', name: 'Naruto', phone: '11223344', imageUrl:'https://static.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest/scale-to-width-down/1920?cb=20150124180545'},
        {id: '4', name: 'Goku', phone: '99887766', imageUrl:'https://imageio.forbes.com/blogs-images/olliebarder/files/2017/10/goku_ultra_instinct.jpg?height=444&width=711&fit=bounds'}
        
    ] 
    return (
    <View>
      <Text style={styles.headingText}>Contact Lists</Text>
      <ScrollView
      style={styles.container}>
        {
            contacts.map(({id,name,phone,imageUrl}) => (
                <View key={id} style={styles.contact}>
                    <Image source={{uri:imageUrl}} style={{width: 50, height: 50, borderRadius: 30}}/>
                    <View style={{marginLeft: 8}}>
                        <Text style={{fontWeight: '600', fontSize: 16, color:'#FFF'}}>{name}</Text>          
                        <Text >{phone}</Text> 
                    </View>
                             
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8
    },
    container: {
        padding: 8
    },
    contact: {
        margin: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5DA3FA',
        padding: 4,
        borderRadius: 8
    }
})