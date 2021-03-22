import React, {useState, useEffect} from 'react';
import {View, StyleSheet, StatusBar, Dimensions, Image, Text, ScrollView, Keyboard} from 'react-native'
import colors from "../constants/colors";
import { ConversionInput} from '../components/ConversionInput';
import { Button } from '../components/Button';
import {format} from 'date-fns';
import { KeyboardSpacer } from '../components/KeyboardSpacer';

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
       flex : 1,
       backgroundColor : colors.blue,
       //justifyContent :'center' 
    },
    logoContainer : {
       alignItems: 'center',
       justifyContent : 'center'
    },
    logoBackground : {
       width : screen.width * 0.45,
       height : screen.width * 0.45
    },
    logo : {
        position : 'absolute',
        width : screen.width * 0.25,
        height : screen.width * 0.25
    },
    textHeader: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign:'center',
        marginBottom: 20
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        color : colors.white
    },
    inputContainer: {
        marginBottom: 10
    },
    content: {
        paddingTop: screen.height * 0.2
    }

})

export default () => {
     
    const baseCurrency = 'USD';
    const quoteCurrency = 'GBP';
    const conversionRate = 0.8928;
    const date = '2021-02-25';

    const [scrollEnabled, setScrollEnabled] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue}/>
            <ScrollView scrollEnabled={scrollEnabled}>
                <View style={styles.content}>
            <View style={styles.logoContainer}>
                    <Image 
                    source={require('../assets/images/background.png')}
                    style={styles.logoBackground}
                    resizeMode="contain"
                    />
                    <Image 
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                    />
            </View> 
            
            <Text style={styles.textHeader}>Converter</Text>
            <View style={styles.inputContainer}>
            <ConversionInput 
                text={baseCurrency}
                value="123"
                onButtonPress={()=> alert('todo')}
                keyboardType="numeric"
                onChangeText= {(text)=> console.log('text', text)}
            />
            <ConversionInput 
                text={quoteCurrency}
                value="123"
                onButtonPress={()=> alert('todo')}
                editable={false}
            />
            </View>
            <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(new Date(date), 'MMM do, yyy')}`}
            </Text>
            <Button text="Reverse Currencies" onPress={()=>swapCurrencies()}/>
            <KeyboardSpacer onToggle={(KeyboardIsVisible) => setScrollEnabled(KeyboardIsVisible)}/>
            </View>
            </ScrollView>
        </View>
    )
}


// <View style={{height: screen.height}}></ScrollView></View>
