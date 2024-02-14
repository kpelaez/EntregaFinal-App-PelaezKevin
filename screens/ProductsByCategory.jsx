import { ActivityIndicator, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search';

import { useGetProductsByCategoryQuery } from '../services/shopService';

import { useSelector} from 'react-redux';

const ProductsByCategory = ({route, navigation}) => {
  
  const category = useSelector(state => state.shopReducer.categorySelected)
  const{data: productsFilteredByCategory , isLoading, error} = useGetProductsByCategoryQuery(category)

  const [productsByCategory, setProductsByCategory] = useState();
  const [search, setSearch] = useState('');


  useEffect(()=>{

    if(!isLoading) {
      const productsValues = Object.values(productsFilteredByCategory)
      const productsFiltered = productsValues.filter(product => product.title.toLowerCase().includes(search.toLocaleLowerCase()))
    setProductsByCategory(productsFiltered)
    }
    
  }, [isLoading, category, search])

  const renderProductItem = ({item}) =>{
    return (
      <ProductItem item={item} navigation={navigation}/>
    )
  }
  
  const onSearch = (search) =>{
    setSearch(search)
  }

  return (
    <>
      {
        isLoading?
        <ActivityIndicator/>
        :
        <>
        <Search onSearchHandlerEvent={onSearch}/>
        <FlatList style={styles.productByCategories}
          data={productsByCategory}
          renderItem={renderProductItem}
          keyExtractor={item=>item.id}
        />
        </>
      }
  
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  productByCategories:{
    marginBottom:85,
  }
})