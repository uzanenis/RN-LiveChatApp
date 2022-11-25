import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import ContactRow from "../components/ContactRow";
import Seperator from "../components/Seperator";
import { SafeAreaView } from "react-native-safe-area-context";

const Chats = ({ navigation }) => {
  const chats = [
    {
      users: ["uzanenis@outlook.com", "a@gmail.com"],
      messages: [],
    },
    {
      users: ["uzanenis@outlook.com", "a@gmail.com"],
      messages: [],
    },
    {
      users: ["uzanenis@outlook.com", "a@gmail.com"],
      messages: [],
    },
    {
      users: ["uzanenis@outlook.com", "a@gmail.com"],
      messages: [],
    },
  ];

  useEffect(() => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
      navigation.navigate("Signup");
    }
  }, []);

  return (
    <View>
      {chats.map((chat, index) => (
        <React.Fragment key={index}>
          <ContactRow
            name={chat.users[1]}
            subTitle="Her şeyi kaybet neşeni kaybetme"
            onPress={() => {
              navigation.navigate("Chat");
            }}
          />
        </React.Fragment>
      ))}

      <Seperator />
    </View>
  );
};

export default Chats;
