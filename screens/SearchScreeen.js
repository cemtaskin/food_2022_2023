import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
  const  [searchApi,results,errorMessage] = useResults();
  
  const filterResultsByPrice = (price) =>{
    // price=== '₺' || '₺₺' || '₺₺₺'
    return results.filter(result  =>{
      return result.price === price;
    });
  };

  return (
    <View style={{ flex:1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We haver found {results.length} results</Text>
      <ScrollView>
        <ResultList navigation={navigation} title="Cost Effective" results={filterResultsByPrice('₺')} />
        <ResultList navigation={navigation} title="Bit Pricier" results={filterResultsByPrice('₺₺')}/>
        <ResultList navigation={navigation} title="Big Spender" results={filterResultsByPrice('₺₺₺')}/>
      </ScrollView>
    </View>
  );
};

const styleSheet = StyleSheet.create({});

export default SearchScreen;
