import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const { gameslug } = useLocalSearchParams();
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalles del juego {gameslug}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atras
        </Link>
      </View>
    </View>
  );
}
