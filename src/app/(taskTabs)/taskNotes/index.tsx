import React from 'react';
import { View, Button, ScrollView, Linking } from 'react-native';
import TaskCard from '@components/ilp/cardTask'; // Ensure this path is correct

const App = () => {
  const pdfs = [
    { title: "Eloquent JavaScript", pdfUrl: 'https://eloquentjavascript.net/Eloquent_JavaScript.pdf', image: require('@assets/task-notes1.png') },
    { title: "React Native Documentation", pdfUrl: 'http://www.africau.edu/images/default/sample.pdf', image: require('@assets/task-notes1.png') },
    { title: "JavaScript The Good Parts", pdfUrl: 'https://www.pdfdrive.com/download.pdf?id=18201979&h=b6c94a08e8235e8611d98200f4c172d2&u=cache&ext=pdf', image: require('@assets/task-notes1.png') },
    // Add more PDFs here
  ];

  const handleCardPress = async (pdfUrl) => {
    const supported = await Linking.canOpenURL(pdfUrl);
    if (supported) {
      await Linking.openURL(pdfUrl);
    } else {
      console.log(`Don't know how to open this URL: ${pdfUrl}`);
    }
  };

  return (
    <ScrollView>
      <View>
        {pdfs.map((pdf, index) => (
          <TaskCard
            key={index}
            item={pdf}  // Pass the PDF object
            isHidden={false}
            onPress={() => handleCardPress(pdf.pdfUrl)}  // Handle card press to open the PDF
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
