import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';
import axios from 'axios';
// import AlbumDetail from './AlbumDetail';
// const AlbumList = () => {
//   const {textStyle, viewStyle} = styles;
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedData = await axios
//         .get('https://rallycoding.herokuapp.com/api/music_albums')
//         .then((response) => {
//           console.log(response, 'response');
//           fetchedData = response;
//         })
//         .catch((error) => {
//           console.log('Looks like there was a problem: \n', error);
//         });
//       console.log(fetchedData);
//       setData(fetchedData);
//     };
//   }, data);

//   return (
//     <View style={viewStyle}>
//       <Text style={textStyle}>Data{data}</Text>
//     </View>
//   );
// };

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => {
        setAlbums(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, [albums]);

  if (load) {
    return (
      <View style={styles.viewStyle}>
        {error ? (
          <Text>{error.message}</Text>
        ) : (
          <View style={{flex: 1}}>
            <ScrollView style={styles.scrollView}>
              {albums.map((album, index) => (
                <View key={index}>
                  <View style={styles.textsViewStyle}>
                    <View style={styles.cardHeader}>
                      <View>
                        <Image
                          style={styles.thumbStyle}
                          source={{uri: album.thumbnail_image}}
                        />
                      </View>
                      <View>
                        <Text style={styles.textStyle}>
                          Album Title: {album.title}
                        </Text>

                        <Text style={styles.textStyle}>
                          Artist: {album.artist}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.imageView}>
                      <Image
                        style={styles.imageStyle}
                        source={{uri: album.image}}
                      />
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={(e) => {
                          Linking.openURL(album.url);
                        }}
                        style={styles.buttonView}>
                        <Text style={styles.buttonText}>Purchase</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    );
  } else {
    return <Text style={styles.textStyle}>Loading...</Text>;
  }
};
const styles = {
  buttonText: {
    alignSelf: 'center',
    color: '#88527F',
    fontSize: 24,
    fontWeight: '600',
    shadowColor: 'white',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
  },
  buttonView: {
    borderWidth: 5,
    textAlign: 'center',
    paddingTop: 5,
    color: '#88527F',
    backgroundColor: 'white',
    height: 50,
    width: 400,
    fontSize: 24,
    borderColor: '#88527F',
    shadowColor: '#88527F',
    borderRadius: 10,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1.5,
  },
  cardHeader: {
    flexDirection: 'row',
    // flex: 1,
    borderRadius: 10,
  },
  thumbStyle: {
    height: 100,
    width: 100,
    borderWidth: 5,
    borderColor: '#B1DDF1',
    // marginVertical: 2,
    shadowColor: '#88527F',
    borderRadius: 2,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1.5,
    borderRadius: 10,
  },
  imageStyle: {
    marginVertical: 2,
    borderWidth: 5,
    borderColor: '#B1DDF1',
    height: 220,
    width: 400,
    shadowColor: '#88527F',
    borderRadius: 5,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1.5,
    borderRadius: 10,
  },
  viewStyle: {
    // height: 1000,
    flex: 1,
    backgroundColor: '#006DAA',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    shadowColor: 'black',
    borderRadius: 0,

    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    // elevation: 2,
    // position: 'relative',
  },
  textsViewStyle: {
    color: 'white',
    width: '100%',
    borderRadius: 10,
    // flexGrow: 1,
    // flex: 1,
    textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 'auto',
    // textAlign: 'Center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // shadowColor: '#88527F',
    // borderRadius: 2,
    // shadowOffset: {width: 2, height: 2},
    // shadowOpacity: 1.5,
    // borderWidth: 2,
    // borderColor: '#B1DDF1',
    // borderShadow: 'black',
    // borderShadowOpacity: 2,
    // shadowColor: '#88527F',
    // borderRadius: 2,
    // shadowOffset: {width: 2, height: 2},
    // shadowOpacity: 1.5,
  },
  textStyle: {
    color: 'white',
    borderRadius: 10,
    width: 300,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    flexGrow: 1,
    paddingTop: 7,
    shadowColor: '#88527F',
    borderRadius: 5,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1.5,
    borderWidth: 3.2,
    borderTop: 1,
    borderBottom: 1,
    borderColor: '#B1DDF1',
    shadowColor: '#88527F',
    borderRadius: 2,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1.5,
    // textAlign: 'right',
    // flexDirection: 'row',
    padding: 'auto',
    fontSize: 25,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
  },
};

export default AlbumList;
