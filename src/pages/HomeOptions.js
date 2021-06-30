import React from "react";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from "react-native-gesture-handler";
import { 
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text
} from "react-native";

function HomeOptions() {
  const navigation = useNavigation();
  function entrepreneurial() {
    navigation.navigate('EntrepreneurialOptions');
  }
  function investor() {
    navigation.navigate('InvestorOptions');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollCards}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <RectButton style={styles.card} onPress={entrepreneurial}>
          <MaterialIcons name="business" size={65} color="#c6c6c6" />
          <Text style={styles.title}>Empreendedorismo</Text>
        </RectButton>

        <RectButton style={styles.card} onPress={investor}>
          <AntDesign name="piechart" size={60} color="#c6c6c6" />
          <Text style={styles.title}>Investimentos</Text>
        </RectButton>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#20232a',
  },
  scrollCards: {
    width: '100%',
    paddingHorizontal: 10,
  },
  card: {
    minHeight: 200,
    borderRadius: 10,
    backgroundColor: '#353A47',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    color: '#c6c6c6',
    fontSize: 22,
    textTransform: 'uppercase',
    marginTop: 20,
  },
});

export default HomeOptions;