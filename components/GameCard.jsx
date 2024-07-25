import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View
      className="flex-row bg-slate-500/20 p-3 rounded-xl gap-4 mb-7"
      key={game.slug}
    >
      <Image source={{ uri: game.image }} style={styles.image} />

      <View>
        <View style={styles.circle}>
          <Score score={game.score} maxScore={100} />
        </View>
        <Text className="mb-1" style={styles.title}>
          {game.title}
        </Text>
        <Text className="mt-2 flex-shrink" style={styles.description}>
          {game.description.slice(0, 100)} ...
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  // header: {
  //   alignItems: "flex-end",
  // },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15, // La mitad del ancho y la altura para hacer un círculo
    borderColor: "green",
    borderWidth: 2,
  },
  score: {
    color: "green",
    fontSize: 15,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 105,
    height: 145,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    fontSize: 18,
  },
});
