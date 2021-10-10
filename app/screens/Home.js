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

  const [friendList, setFriendList] = React.useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
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

  function _renderFriends() {
    if (friendList.length === 0) {
      return <View></View>;
    } else if (friendList.length <= 3) {
      return friendList.map((item, idx) => (
        <View key={`friends-${idx}`} style={idx === 0 ? {} : {marginLeft: -20}}>
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 3,
              borderColor: COLORS.primary,
            }}
          />
        </View>
      ));
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {friendList.map((item, idx) => {
            if (idx <= 2) {
              return (
                <View
                  key={`friend-${idx}`}
                  style={idx == 0 ? {} : {marginLeft: -20}}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              );
            }
          })}
          <Text
            style={{
              marginLeft: 5,
              color: COLORS.secondary,
              ...FONTS.body4,
            }}>{`+${friendList.length - 3} more`}</Text>
        </View>
      );
    }
  }
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
      <View style={styles.containerAddedFriend}>
        <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
          <View
            style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding}}>
            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
              Added Friends
            </Text>
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
              {friendList.length} Total
            </Text>
            <View style={{flexDirection: 'row', height: '60%'}}>
              {/* Friends */}
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {_renderFriends()}
              </View>

              {/* Add friends */}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: COLORS.gray, ...FONTS.body3}}>
                  Add New
                </Text>
                <TouchableOpacity
                  onPress={() => console.log('Hey je suis clique')}
                  style={{
                    marginLeft: SIZES.base,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray,
                  }}>
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
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
