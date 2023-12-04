import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";
import {
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { COLORS, icons, images } from "../constants";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: COLORS.lightWhite },
          // 18. headerLeft and headerRight should return ScreenHeaderBtn
          // 23. Pass props to button components
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerShadowVisible: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <PopularJobs />
        <NearbyJobs />
      </ScrollView>
    </SafeAreaView>
  );
}
