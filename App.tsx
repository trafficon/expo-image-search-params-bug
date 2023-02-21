import { Platform, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 128, height: 128 }}
        contentFit="contain"
        transition={1000}
        source={{
          uri: 'http://localhost:3000?platform=' + Platform.OS + '&color=%230000ff&otherParam=willBeCutOff',
          width: 32,
          height: 32,
        }}
      />
    </View>
  );
}
