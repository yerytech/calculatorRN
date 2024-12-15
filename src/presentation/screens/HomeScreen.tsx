import { colors, styles } from "../../config/theme/styles";
import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";
import { ButtonCustom } from "../components/share/ButtonCustom";
import { useCalculator } from "../hooks/useCalculator";

export const HomeScreen = () => {
  const {
    buildNumber,
    handleAC,
    toglePlusMinus,
    deletelast,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
    formula,
    prevNumber,
  } = useCalculator();
  return (
    <View style={styles.scaffold}>
      <StatusBar style="light" />
      <View style={styles.resultsScreen}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.mainResult}
        >
          {formula}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.subResult}
        >
          {prevNumber}
        </Text>
      </View>
      {/* <Results /> */}
      <View style={styles.row}>
        <ButtonCustom
          Onpress={() => handleAC()}
          textColor
          label="AC"
          color={colors.colors.gray}
        />
        <ButtonCustom
          Onpress={() => toglePlusMinus()}
          textColor
          label="+/-"
          color={colors.colors.gray}
        />
        <ButtonCustom
          textColor
          Onpress={() => deletelast()}
          label="Del"
          color={colors.colors.gray}
        />
        <ButtonCustom
          Onpress={() => divideOperation()}
          label="÷"
          color={colors.colors.yellow}
        />
      </View>
      <View style={styles.row}>
        <ButtonCustom
          Onpress={() => buildNumber("7")}
          label="7"
        />
        <ButtonCustom
          Onpress={() => buildNumber("8")}
          label="8"
        />
        <ButtonCustom
          Onpress={() => buildNumber("9")}
          label="9"
        />
        <ButtonCustom
          Onpress={() => multiplyOperation()}
          label="X"
          color={colors.colors.yellow}
        />
      </View>
      <View style={styles.row}>
        <ButtonCustom
          Onpress={() => buildNumber("4")}
          label="4"
        />
        <ButtonCustom
          Onpress={() => buildNumber("5")}
          label="5"
        />
        <ButtonCustom
          Onpress={() => buildNumber("6")}
          label="6"
        />
        <ButtonCustom
          Onpress={() => subtractOperation()}
          label="-"
          color={colors.colors.yellow}
        />
      </View>
      <View style={styles.row}>
        <ButtonCustom
          Onpress={() => buildNumber("1")}
          label="1"
        />
        <ButtonCustom
          Onpress={() => buildNumber("2")}
          label="2"
        />
        <ButtonCustom
          Onpress={() => buildNumber("3")}
          label="3"
        />
        <ButtonCustom
          Onpress={() => addOperation()}
          label="+"
          color={colors.colors.yellow}
        />
      </View>
      <View style={styles.row}>
        <ButtonCustom
          Onpress={() => buildNumber("0")}
          label="0"
          doubleSize
        />
        <ButtonCustom
          Onpress={() => buildNumber(".")}
          label="."
        />

        <ButtonCustom
          Onpress={() => calculateResult()}
          label="="
          color={colors.colors.yellow}
        />
      </View>
    </View>
  );
};
