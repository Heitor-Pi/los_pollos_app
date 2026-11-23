import { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/logo.png";
import { AppIcon } from "../../components/AppIcon";
import { ButtonOutline } from "../../components/ButtonOutline";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { colors } from "../../themes/colors";
import { styles } from "./style";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEnter = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.containerLogin}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoSection}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.tagline}>O sabor que você merece!</Text>
        </View>

        <View style={styles.formSection}>
          <View style={styles.inputBox}>
            <AppIcon name="mail" size={18} color={colors.colorGray} />
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor={colors.colorGray}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputBox}>
            <AppIcon name="lock" size={18} color={colors.colorRed} />
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor={colors.colorGray}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Pressable style={styles.forgotBtn}>
            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
          </Pressable>

          <ButtonPrimary
            title="ENTRAR"
            onPress={handleEnter}
            style={styles.btnEnter}
          />

          <Text style={styles.noAccountText}>Ainda não tem uma conta?</Text>

          <ButtonOutline title="CRIAR CONTA" onPress={handleEnter} />

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          <Pressable style={styles.visitorBtn} onPress={handleEnter}>
            <AppIcon name="profile" size={16} color={colors.colorGray} />
            <Text style={styles.visitorText}>Continuar como visitante</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.bottomStripes}>
        <View style={styles.stripeRed} />
        <View style={styles.stripeRed} />
        <View style={styles.stripeRed} />
      </View>
    </SafeAreaView>
  );
};
