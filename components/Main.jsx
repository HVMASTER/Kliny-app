import { useEffect, useState } from "react";
import { Link } from "expo-router";
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { InfoIcon } from "./Icons";

import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 10 }}>
        <Logo />
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          KLINY
        </Text>
      </View>
      <Link asChild href="/about" className="mb-2">
        <StyledPressable className={`active:opacity-50`}>
          <InfoIcon />
        </StyledPressable>
      </Link>
      {games.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
