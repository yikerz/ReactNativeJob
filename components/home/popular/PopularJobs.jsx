import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./popularjobs.style";

import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import PopularJobCard from "../../cards/popular/PopularJobCard";

const PopularJobs = () => {
  const router = useRouter();
  // 51. Use useFetch to get data, isLoading, error and refetch
  const { data, isLoading, error, refetch } = useFetch(
    'search', {
      query: 'React developer',
      num_pages: 1
    }
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            // 56. Pass the data to the FlatList
            data={data}
            keyExtractor={item => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
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
