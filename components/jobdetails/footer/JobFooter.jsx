// 93. Create JobFooter component
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../../constants";
import styles from "./footer.style";

const JobFooter = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image 
          style={styles.likeBtnImage} 
          source={ icons.heartOutline }
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* 94. Link to job page */}
      <TouchableOpacity 
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default JobFooter
