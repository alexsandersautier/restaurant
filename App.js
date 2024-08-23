import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Pessoas no restaurante</Text>
      <View style={styles.containerValue}>
        <Text style={styles.value}>{quantity}</Text>  
      </View>
      <View style={styles.containerButtons}>
        <Pressable 
          style={styles.button}
          onPress={() => {setQuantity((prev) =>{
            if (prev + 1 > 10) {
              alert("Restaurante chegou no seu limite");
              return prev;
            } else {
              return prev + 1;
            }
          })}}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>
        <Pressable 
          style={styles.button}
          onPress={() => {setQuantity((prev) => {
            if ( prev - 1 <= 0) {
              return 0;
            } else {
              return prev - 1
            }
          })}}>
          <Text style={styles.buttonText}>Remover</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  containerValue:{
    backgroundColor: "black",
    height: 60,
    width: 40,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 10
  },
  value: {
    color: "white",
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "bold"
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: 'space-between',
    gap: 20
  },
  button: {
    backgroundColor: "#0D7EF9",
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
