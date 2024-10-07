import { View, Image, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from '@components/cards/FlatCards'
import ElevatedCards from '@components/cards//ElevatedCards'
import FancyCards from '@components/cards/FancyCards'
import ActionCards from '@components/cards/ActionCards'
import ContactLists from '@components/cards/ContactLists'


export default function App(){
  return (

    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ElevatedCards/>
      <FancyCards/>
      <ContactLists/>
      <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  )
}