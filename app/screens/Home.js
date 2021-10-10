import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {theme, icons, images} from '../constants';

const {COLORS, FONTS, SIZES} = theme;

const Home = () => {
  const [newPlants, setNewPlants] = React.useState([
    {
      id: 0,
      name: 'Plant 1',
      img: images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: 'Plant 2',
      img: images.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: 'Plant 3',
      img: images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: 'Plant 4',
      img: images.plant4,
      favourite: false,
    },
    {
      id: 4,
      name: 'Plant 5',
      img: images.plant5,
      favourite: false,
    },
  ]);

  const _renderItem = (item, index) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 10,
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.23,
            height: '82%',
            borderRadius: 10,
          }}
        />

        <View
          style={{
            backgroundColor: COLORS.primary,
            position: 'absolute',
            bottom: '17%',
            right: 0,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
        </View>

        <TouchableOpacity
          onPress={() => console.log('Favourite pressed')}
          style={{
            position: 'absolute',
            top: '15%',
            left: 7,
          }}>
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* New plants */}
      <View style={styles.containerNewPlant}>
        <View style={styles.SouscontainerNewPlant}>
          <View style={styles.MenuNewPlant}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plant</Text>
              <TouchableOpacity onPress={() => console.log('clicked')}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={newPlants}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => _renderItem(item, index)}
            />
          </View>
        </View>
      </View>

      {/* Today's share */}
      <View style={styles.containerTodaysShare}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}>
          <View
            style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                Today's share
              </Text>
              <TouchableOpacity onPress={() => console.log('See All')}>
                <Text style={{color: COLORS.secondary, ...FONTS.h3}}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '88%',
                marginTop: SIZES.base,
              }}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => console.log('pressed image')}>
                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex: 1, marginTop: SIZES.font}}
                  onPress={() => console.log('pressed image')}>
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1.3}}>
                <TouchableOpacity
                  style={{flex: 1, marginLeft: SIZES.font}}
                  onPress={() => console.log('On pressed')}>
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{height: '100%', width: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Added Friend */}
      <View style={styles.containerAddedFriend}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  containerNewPlant: {
    // backgroundColor: 'green',
    height: '30%',
  },
  SouscontainerNewPlant: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  MenuNewPlant: {
    marginTop: SIZES.padding * 2,
    marginHorizontal: SIZES.padding,
  },
  containerTodaysShare: {
    height: '50%',
    backgroundColor: COLORS.lightGray,
  },
  containerAddedFriend: {
    height: '20%',
  },
});
export default Home;
