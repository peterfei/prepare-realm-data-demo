/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import {saveDemo} from './realm/RealmManager'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Realm = require('realm');
// require the module
var RNFS = require('react-native-fs');
let realm;

type Props = {};
const DemoSchema = {
  name: 'Demo',
  properties: {
    name: 'string', // ID
  }
}
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    Realm.copyBundledRealmFiles();
      // console.log(`===DocumentDirectoryPath is \name===${RNFS.DocumentDirectoryPath}`)
      //  saveDemo({name:"1111"})
      // RNFS.unlink(RNFS.DocumentDirectoryPath+"/demo.realm.lock");
      // RNFS.unlink(RNFS.DocumentDirectoryPath+"/demo.realm.management");
      // RNFS.unlink(RNFS.DocumentDirectoryPath+"/demo.realm");
      
      realm = new Realm({
        path:
            //RNFS.MainBundlePath + '/demo.realm',
          RNFS.DocumentDirectoryPath + '/demo.realm',
        schema: [DemoSchema],
        readOnly: true,
        schemaVersion: 1,
      });
      // debugger
      // realm.copyBundledRealmFiles()
      // alert(`===RNFS.MainBundlePath is \name===${(RNFS.MainBundlePath)}`)
      // RNFS.moveFile(RNFS.MainBundlePath+"/demo.realm", RNFS.DocumentDirectoryPath+"/demo.realm")
      //     .then((success) => {
      //       console.log('FILE WRITTEN!');
      //       // console.log(realm.path, RNFS.DocumentDirectoryPath);
      //       // return realm
      //       realm = new Realm({
      //         // path: 'newDefault.realm',
      //         schema: [{name: 'Demo', properties: {name: 'string'}}]
      //       });
      //       this.setState({realm: realm});
      //       return realm;
      //     })
      //     .catch((err) => {
      //       alert("move error"+err.message);
      //     });
      
      this.state = {realm: realm};
    }
    renderNewComponent(){
      
      // this.state.realm.copyBundledRealmFiles()
      // console.log(this.state.realm.path, RNFS.DocumentDirectoryPath);
      return (
        <Text style={styles.welcome}>
          Count of Dogs in Realm: {this.state.realm.objects('Demo').length};
        </Text>
        );
    }
  render() {
    // debugger
    let renderComponent = this.state.realm != undefined ? this.renderNewComponent() : null;

    return (
      <View style={styles.container}>
        {renderComponent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
