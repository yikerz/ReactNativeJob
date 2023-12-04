// 86. Create Specifics components
import { Text, View } from "react-native";
import styles from "./specifics.style";

const Specifics = ({ activeTab, points }) => {
  return (
    <View style={styles.container}>
      {/* 87. Display active tab as title */}
      <Text styles={styles.title}>{activeTab}:</Text>
      {/* 88. Display actual content */}
      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <Text style={styles.pointDot}/>
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Specifics
