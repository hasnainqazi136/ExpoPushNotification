import React from "react";
import { Text, Image } from "react-native";

import { Card } from "../../components/card";
import { Container } from "../../components/container";
import { Button } from "../../components/button";

import { usePushNotifications } from "../../hooks/usePushNotifications";
import { sendPushNotification } from "./utils";

import styles from "./dashboard.style";

const Dashboard = () => {
  const { expoPushToken } = usePushNotifications();

  return (
    <Container>
      <Card>
        <Text>Hit the button to receive updates!</Text>
      </Card>
      <Image
        source={require("../../assets/images/sage.png")}
        resizeMode={"contain"}
        style={styles.image}
      />
      <Button
        containerStyle={styles.blueHollowContainer}
        textStyle={styles.blueHollowTitle}
        title="Press me"
        onPress={() => sendPushNotification(expoPushToken?.data!)}
      />
    </Container>
  );
};

export default Dashboard;
