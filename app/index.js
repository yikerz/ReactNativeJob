import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import {
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { COLORS, SIZES, icons, images } from "../constants";

export default function Home() {
  const router = useRouter();
  // 95. Create searchTerm state
  const [searchTerm, setSearchTerm] = useState("");

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
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          {/* 96. Add new props to Welcome component */}
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => router.push(`/search/${searchTerm}`)}
          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
