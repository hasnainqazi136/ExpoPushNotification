import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import styles from "./container.style";

interface ContainerProps {
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export { Container };
