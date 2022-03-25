import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

//icons
import { Entypo } from '@expo/vector-icons';
import CardView from './component/CardView';

export default function App() {

  const products = [
    {
      id: 1,
      name: 'Milk'
    },
    {
      id: 2,
      name: 'Coffee'
    },
    {
      id: 3,
      name: 'Oranges'
    },
    {
      id: 4,
      name: 'Bread'
    }
  ]

  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState(dataSource)
  const [dataSource, setDataSource] = useState(products)

  useEffect(() => {
    setFilterData(products)
  }, []);


  const searchFilterFunction = (text) => {
    if (text) {
      const newData = dataSource.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase;

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(dataSource);
      setSearch(text)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Search'
            style={styles.textInput}
            value={search}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            maxLength={20}
          />
        </View>
        <Entypo name="plus" size={35} color="black" onPress={() => {
          var min = 1;
          var max = 1000;
          var id = Math.floor(Math.random() * (max - min + 1) + min);
          dataSource.push({ id: id, name: search })
          setFilterData(dataSource)
          setSearch('')
        }} />
      </View>
      <FlatList
        data={filterData}
        ListEmptyComponent={
          <View style={{
            justifyContent: 'center',
            margin: 25
          }}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}> Item not found in list </Text>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20 }}>
              Press " + " to add in list
            </Text>
          </View>
        }
        renderItem={({ item }) =>
          <CardView name={item.name} />
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  subContainer: {
    alignSelf: 'flex-start',
    width: '100%',
    height: 50,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1.5,
    marginTop: '10%'
  },
  searchContainer: {
    width: '75%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textInput: {
    paddingLeft: 10
  }
})

