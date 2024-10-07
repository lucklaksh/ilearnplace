import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View , Button, ScrollView} from 'react-native';
import { Link, Stack } from 'expo-router';
import Markdown from 'react-native-markdown-display';


const MarkdownDisplay = ({children}: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior='automatic'>
        <Stack.Screen options={{ title: 'Editor'}} />
        <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
    
  ); 
};

const markdownStyles =StyleSheet.create({
    heading1: {
        fontFamily : 'Inter',
        color: 'red',
        marginBottom: 10,
        
    },
    heading2: {
        color: 'green'
    },
    heading3: {
        color: 'gray'
    },
    body: {
        color: 'blue'
    }
});

const styles =StyleSheet.create({
    page :{
        backgroundColor: 'white',
        flex: 1,
        padding: 10,

    }
});

export default MarkdownDisplay;


