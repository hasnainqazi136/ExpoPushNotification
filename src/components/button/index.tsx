import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";

import styles from "./button.style";

interface ButtonProps {
  title: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const renderTitle = () => (
    <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
  );

  const renderButton = () => (
    <View style={styles.contentContainer}>{renderTitle()}</View>
  );

  return (
    <TouchableOpacity
      disabled={props.disabled || props.loading}
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}
    >
      {renderButton()}
    </TouchableOpacity>
  );
};

export { Button };
