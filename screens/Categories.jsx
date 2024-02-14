import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoryItem from '../components/CategoryItem'


const Categories = ({navigation}) => {

  const{data, isLoading, error} = useGetCategoriesQuery()

  const renderCategoryItem=({item})=>{
    return(
        <CategoryItem category={item} navigation={navigation}/>
    )
  }

  return (
    <>
      <FlatList 
          style={styles.container}
          renderItem ={renderCategoryItem}
          data={data}
          keyExtractor = {category => category} 
      />
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        marginBottom:85,
    }
})