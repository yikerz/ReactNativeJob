// 60. Copy from PopularJobs with modification
import { useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import styles from "./nearbyjobs.style";

import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import NearbyJobCard from "../../cards/nearby/NearbyJobCard";

const NearbyJobs = () => {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch(
    'search', {
      query: 'React developer',
      num_pages: 1
    }
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
          // 61. Use map function instead
          data?.map((job) => (
            <NearbyJobCard />
          ))
        )}
      </View>
    </View>
  )
}

export default NearbyJobs
