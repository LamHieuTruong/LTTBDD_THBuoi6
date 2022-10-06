import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button
} from "react-native";


function App () {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      
      flexDirection: "column"
    }]}>
      <View>
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Nhập vào"
        keyboardType="text"
      />
      <Button style={{flex:1, with: 20}}
        title="ADD"
        color="#f194ff"
        
      />
    </SafeAreaView>
      </View>
      

      <View style={{ flex: 1 }}/>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default App;