import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getLatestGames } from "../lib/metacritic";
import { Screen } from "../components/Screen";
import { useState, useEffect } from "react";

export default function Details() {
  const { gameslug } = useLocalSearchParams();

  const [game, setGame] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      const foundGame = games.find((g) => g.slug === gameslug);
      setGame(foundGame);
    });
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerLeft: () => {},
          headerTitle: () => (
            <Text className="text-2xl font-bold mr-20">
              {game ? game.title : "Cargando..."}
            </Text>
          ),
          headerRight: () => {},
        }}
      />
      <View className="">
        <View>
          <Text className="text-white font-bold mb-8 text-2xl">
            Detalles del juego {gameslug}
          </Text>
          <Link href="/" className="text-blue-500">
            Volver atras
          </Link>
        </View>
      </View>
    </Screen>
  );
}
