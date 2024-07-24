import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <View style={styles.header}>
        <View style={styles.circle}>
          <Text style={styles.score}>{game.score}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: game.image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
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
  header: {
    alignItems: "flex-end",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20, // La mitad del ancho y la altura para hacer un círculo
    borderColor: "green",
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 5,
  },
  score: {
    color: "green",
    fontSize: 20,
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
    fontSize: 14,
  },
});
