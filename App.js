import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Image, Dimensions} from 'react-native';
import news_data from './src/news_data.json';
import NewsCard from './src/components/NewsCard';
import news_banner_data from './src/news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <View>
        <FlatList
          ListHeaderComponent={() => (<ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image style={styles.banner_image} source={{uri: bannerNews.imageUrl}} />
              ))}
          </ScrollView>)}
          keyExctractor={(item, index) => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  }
});

export default App;
