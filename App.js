import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://6346d6c5745bd0dbd387c804.mockapi.io/User")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      });
  }, []);
  return (
    <View style={{margin: 20, marginTop: 50}}>
      <ScrollView>
        {data.map((user) => (
          <Text key={user.id}>{user.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});