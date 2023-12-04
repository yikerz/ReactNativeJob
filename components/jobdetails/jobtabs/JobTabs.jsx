
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SIZES } from "../../../constants";
import styles from './tabs.style';

const TabButton = ({ name, activeTab, onHandlePress }) => (
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandlePress}>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
)

const JobTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={tabs}
        renderItem={({ item }) => (
          <TabButton 
            name={item}
            activeTab={activeTab}
            onHandlePress={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small / 2}}
      />
    </View>
  )
}

export default JobTabs
