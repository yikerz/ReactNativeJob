// 73. Create Company component

import { Image, Text, View } from "react-native"
import { icons } from "../../../constants"
import { checkImageURL } from "../../../utils"
import styles from "./company.style"

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    // 74. Create structure
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
          source={{
            uri: checkImageURL(companyLogo) 
                ? companyLogo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          style={styles.logoImage}
        />
      </View>

      {/* 75. Display job title below logo */}
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      {/* 76. Display company name below job title */}
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        {/* 77. Display location icon and location */}
        <View style={styles.locationBox}>
          <Image 
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company
