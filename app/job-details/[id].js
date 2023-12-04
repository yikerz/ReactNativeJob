// 63. Create page for endpoint job-details/[id]
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import useFetch from "../../hook/useFetch";

import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons } from "../../constants";

const JobDetails = () => {
  // 64. Get path variable id
  const params = useGlobalSearchParams();
  // 65. Instantiate useRouter hook
  const router = useRouter();
  // 66. Fetch data for job details by job id
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  return (
    // 67. Page should render SafeAreaView component
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* 68. Create header for the page */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
        }}
      />
    </SafeAreaView>
  );
};

export default JobDetails;
