import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './popularjobcard.style';

const PopularJobCard = ({ selectedJob, item }) => {
  return (
    // 52. JobCard is a TouchableOpacity
    <TouchableOpacity 
      style={styles.container(selectedJob, item)}
      onPress={() => {}}
    >
      {/* 53. Clickable logo */}
      <TouchableOpacity
        style={styles.logoContainer(selectedJob, item)}
      >
       <Image 
        source={{ uri: item.employer_logo }}
        resizeMode="contain"
        style={styles.logoImage}
       />
      </TouchableOpacity>
      {/* 54. Display company name */}
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        {/* 55. Display job title and country */}
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard
