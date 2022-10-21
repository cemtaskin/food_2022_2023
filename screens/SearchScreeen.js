import React, {useState} from "react";
import {Text,View,StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = ()=>{
    const[errorMessage,setErrorMessage]=useState('');
    const[result,setResult]=useState([]);
    const[term,setTerm]=useState('');

    //initial search added 
    

    const searchApi = async(searchTerm)=>{
        console.log('Search Started');
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    location:searchTerm
                }
            });
            setResult(response.data.businesses);
        }catch(err){
            setErrorMessage('Something went wrong');
        }
        
    };
    
    
    return <View style={{backgroundColor:'gray'}}>
        <SearchBar 
            term={term} 
            onTermChange={newTerm=>setTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)} 
        />
        {errorMessage?<Text>{errorMessage}</Text>:null}
        <Text>We haver found {result.length} results</Text>
    </View>
};

const styleSheet= StyleSheet.create({});

export default SearchScreen;