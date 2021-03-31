/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import AccountManager from 'react-native-account-manager';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
function App() {

  const [accountDevices, setAccountDevices] = useState([]);
  const [textUsername, setTextUsername] = useState('');
  const [textPassword, setTextPassword] = useState('');

  const getAccountInDevice = () => {
    AccountManager.getAccountsByType('com.accountmanager').then((accounts) => {
      console.log('available accounts', accounts);
      setAccountDevices(accounts);
      // console.log(firstAccount);
      
      // AccountManager.getUserData(firstAccount, 'com.accountmanager').then((storedData) => {
      //   console.log('stored data for storeKey', storedData);

      //   AccountManager.setUserData(account, 'storedKey', JSON.stringify({foo: "bar"})).then(() => {
      //     // console.log('data successfully stored');
      //     })
      //   });
      })
  }
  return (
    <SafeAreaView>
      <View style={{padding: 50}}>
        <View style={styles.blockInput}>
          <Text style={styles.label}>Username:</Text>
          <TextInput 
            onChangeText={setTextUsername}
            style={styles.textInput}
          />
        </View>
        <View style={styles.blockInput}>
          <Text style={styles.label}>Password:</Text>
          <TextInput 
            onChangeText={setTextPassword}
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.blockButton}
          onPress={getAccountInDevice}>
          <Text style={styles.buttonSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  textInput: {
    // color
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 30,

    // padding
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonSubmit: {
    paddingHorizontal: 20,
    paddingVertical: 10,

    // color
    backgroundColor: '#0099FF',
    color: 'white',

    // border
    borderRadius: 30,
  },
  blockInput: {
    marginBottom: 10,
  },
  blockButton: {
    alignItems: 'center',
    marginTop: 10,
  }
})

export default App;
