import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";
import PopularJobs from "../components/home/popular/Popularjobs";
import NearByJobs from "../components/home/nearby/Nearbyjobs";

const Home = () => {
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
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView 
      showsHorizontalScrollIndicator={false}>
        <View
        style={{
            flex: 1,
            padding: SIZES.medium
        }}
        >
            <Welcome />
            <PopularJobs />
            <NearByJobs />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
