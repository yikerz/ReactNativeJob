import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./popularjobs.style";

import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../cards/popular/PopularJobCard";

const PopularJobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

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
