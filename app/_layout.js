import { Stack, Link } from "expo-router";
import { Pressable, View, Text } from "react-native";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "",
          headerTitle: "",
          headerLeft: () => (
            <>
              <View className="flex-row items-center">
                <Logo />
                <Text className="text-cyan-600 text-2xl font-extrabold">
                  KLINY
                </Text>
              </View>
            </>
          ),
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <InfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
