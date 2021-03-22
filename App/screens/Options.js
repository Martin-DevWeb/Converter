import React from 'react';
import {View, ScrollView, Linking, Alert} from 'react-native';
import colors from '../constants/colors';
import { Entypo } from '@expo/vector-icons';
import { RowItem, RowSeparator } from '../components/RowItem';


const openLink = (url) => {
    Linking.openURL(url).catch(()=>
      Alert.alert('Désolé,il y a un petit souci', 'Réessayez plus tard') )
};

export default () => {
    return (
        
        <View style={{marginTop: 20, flex:1}}>
          <ScrollView>
            <RowItem 
                title="Themes"
                onPress={() => alert('todo')}
                rightIcon={
                    <Entypo name="chevron-right" size={20} color={colors.blue} />
                }
             />

            <RowSeparator />

            <RowItem 
                title="Les bases de React Native"
                onPress={() => openLink(
                    'https://reactnative.dev/docs/getting-started'
                )}
                rightIcon={
                    <Entypo name="export" size={20} color={colors.blue} />
                }
             />

            <RowSeparator />

            <RowItem 
                title="Appronfondissement de React Native"
                onPress={() => openLink(
                    'https://reactnative.dev/blog'
                )}
                rightIcon={
                    <Entypo name="export" size={20} color={colors.blue} />
                }
             />
            
          </ScrollView>
        </View>
    )
}