import React , {useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen  = ({navigation}) =>{
    const id = navigation.getParam('id');
    const [result,setResult] = useState(null);


    const getResult = async (id) =>{
        console.log('Start');
        const response = await yelp.get(`/${id}`);
        console.log('End');
        console.log(response);
        setResult(response.data);
    };
    

    useEffect(()=>{getResult(id);},[]);

    if (!result){
        return null;
    }


    return <View>
        <Text>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image
                    style={styles.image}
                    source={{ uri:item}}
                />
            }}
        />
    </View>
};

const styles = StyleSheet.create({
image: {
    width:300,
    height:200
}

});

export default ResultsShowScreen;