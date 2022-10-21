import React from "react";
import {View,TextInput,StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit})=>{
    return <View style={styles.background}>
        <Feather name="search" size={30} style={styles.iconStyle}></Feather>
        <TextInput 
            placeholder="Search" 
            style={styles.inputStyle}
            autoCorrect={false}
            autoCapitalize="none"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
           ></TextInput>
    </View>
};

const styles = StyleSheet.create({
    background : {
        marginTop:10,
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal : 15,
        flexDirection:'row'
    },
    inputStyle:{
        borderColor:'black',
        flex:1
    },
    iconStyle:{
        margin:10
    }
});

export default SearchBar;