// 17. Create header button component
import { Image, TouchableOpacity } from "react-native"
import styles from "./screenheader.style"

// 21. Add props 
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    // 19. Return TouchableOpacity as button
    // 22. Add onPress to trigger handlePress
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      {/* 20. Clickable image as button */}
      <Image 
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
