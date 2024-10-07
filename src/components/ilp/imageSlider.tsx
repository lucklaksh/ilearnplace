// ImageSlider.tsx
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

interface Poster {
  id: string;
  src: any; 
  title: string;
}

interface ImageSliderProps {
  posters: Poster[];
  onPosterPress: (index: number) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ posters, onPosterPress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View>
      {/* Image slider */}
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        showPagination
        paginationStyleItem={styles.paginationItem}
        paginationStyleItemActive={styles.paginationActiveItem}
        paginationStyleItemInactive={styles.paginationInactiveItem}
        onChangeIndex={({ index }) => setCurrentIndex(index)}
        data={posters}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onPosterPress(index)} activeOpacity={0.8}>
            <View style={styles.child}>
              <Image source={ item.src } style={styles.image} />
              <Text style={styles.imageTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {/* Poster Info */}
      {/* <View style={styles.posterInfo}>
        <Text style={styles.posterText}>Now Showing: {posters[currentIndex].title}</Text>
      </View> */}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  child: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: 250,
    borderRadius: 10,
  },
  imageTitle: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  posterInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  posterText: {
    fontSize: 18,
    fontWeight: '600',
  },
  paginationItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  paginationActiveItem: {
    backgroundColor: 'blue',
  },
  paginationInactiveItem: {
    backgroundColor: 'gray',
  },
});

export default ImageSlider;
