import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ProductsList from "./components/ProductsLists";


export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black mt-7">
      <View className={"flex-row w-full gap-5"}>
        <Text className="dark:text-white text-2xl font-bold">
          Nueva colección
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <ProductsList />
      <StatusBar style={colorScheme === "dark" ? "auto" : "dark"} />
    </SafeAreaView>
  );
}