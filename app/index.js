import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { NearbyJobs, PopularJobs, Welcome } from "../components";
import { COLORS } from "../constants";

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
          headerLeft: () => <Text>Left</Text>,
          headerRight: () => <Text>Right</Text>,
          headerShadowVisible: false,
        }}
      />
      {/* 13. Create ScrollView */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 16. Wrap all home components */}
        <Welcome />
        <PopularJobs />
        <NearbyJobs />
      </ScrollView>
    </SafeAreaView>
  );
}
