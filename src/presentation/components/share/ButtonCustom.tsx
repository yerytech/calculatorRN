import { Pressable, Text } from "react-native";
import { colors, styles } from "../../../config/theme/styles";

interface Props {
  label: string;
  color?: string;
  textColor?: boolean;
  doubleSize?: boolean;
  btnhigth?: number;
  Onpress: Function;
}
export const ButtonCustom = ({
  Onpress,
  label,
  btnhigth = 90,
  textColor,
  doubleSize,
  color = colors.colors.secondary,
}: Props) => {
  return (
    <Pressable
      onPress={() => Onpress()}
      style={({ pressed }) => ({
        ...styles.btn,
        width: doubleSize ? 200 : 90,

        height: btnhigth,
        opacity: pressed ? 0.5 : 1,
        backgroundColor: color,
      })}
    >
      <Text
        style={{
          ...styles.btnText,
          color: textColor ? "black" : colors.colors.text,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
