import { Stack, Link } from "expo-router";
import { Pressable, View, Text } from "react-native";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/Icons";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

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
              <Link href="/" asChild>
                <StyledPressable className="active:opacity-70 rounded-xl">
                  <View className="flex-row items-center">
                    <Logo />
                    <Text className="text-cyan-600 text-2xl font-extrabold">
                      KLINY
                    </Text>
                  </View>
                </StyledPressable>
              </Link>
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
