import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./popularjobs.style";

import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../cards/popular/PopularJobCard";

const PopularJobs = () => {
  // 35. Create useRouter hook
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      {/* 36. Create header for the component */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      {/* 37. Create container for conditional rendering */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          // 38. Render loading indicator if isLoading
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          // 39. Render error message if error occurs
          <Text>Something went wrong</Text>
        ) : (
          // 40. Render FlatList for normal condition
          <FlatList 
            data={[1, 2, 3, 4]}
            keyExtractor={item => item}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
              />
            )}
          />
        )}
      </View>
    </View>
  )
}

export default PopularJobs
