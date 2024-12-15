import { StyleSheet } from "react-native";

export const colors = {
  colors: {
    primary: "#ffffff",
    secondary: "#222222",
    background: "#000000",
    text: "#F7E4F3",
    textSecondary: "#9C9C9C",
    gray: "#A0A0A0",
    yellow: "#CC7E22",
  },
};

export const styles = StyleSheet.create({
  scaffold: {
    flex: 1,

    backgroundColor: colors.colors.background,
  },
  resultsScreen: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    flex: 1,
    justifyContent: "flex-end",
  },
  mainResult: {
    fontSize: 70,
    textAlign: "right",
    marginBottom: 10,
    fontWeight: 400,
    color: colors.colors.text,
  },

  subResult: {
    color: colors.colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
  },

  btn: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colors.gray,
    marginHorizontal: 10,
  },

  btnText: {
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    fontWeight: "400",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
