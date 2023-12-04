import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import { COLORS } from "../constants";

export default function Home() {
  // 10. Create useRouter hook
  const router = useRouter();

  return (
    // 11. Wrap everything inside SafeAreaView
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      {/* 12. Config stack title */}
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerLeft: () => <Text>Left</Text>,
          headerRight: () => <Text>Right</Text>,
          headerShadowVisible: false,
        }}
      />
    </SafeAreaView>
  );
}
