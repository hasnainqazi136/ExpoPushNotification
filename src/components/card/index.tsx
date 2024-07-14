import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

import styles from "./card.style";

interface CardProps {
  style?: ViewStyle;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const { style } = props;

  return <View style={[styles.container, style]}>{props.children}</View>;
};

export { Card };
