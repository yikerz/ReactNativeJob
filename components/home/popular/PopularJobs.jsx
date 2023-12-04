import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./popularjobs.style";

import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import PopularJobCard from "../../cards/popular/PopularJobCard";

const PopularJobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();
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
            data={data}
            keyExtractor={item => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
                selectedJob={selectedJob}
                handlePress={() => {
                  router.push(`/job-details/${item.job_id}`);
                  setSelectedJob(item.job_id);
                }}
              />
            )}
          />
        )}
      </View>
    </View>
  )
}

export default PopularJobs
