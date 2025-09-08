import { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";

import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedLink from "@/presentation/shared/ThemedLink";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";

export default function LoginScreen() {
  const { login } = useAuthStore();
  const { height } = useWindowDimensions();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isPosting, setIsPosting] = useState(false);

  const onLogin = async () => {
    const { email, password } = form;

    if (email.length === 0 || password.length === 0) return;

    setIsPosting(true);

    const wasSuccessful = await login(email, password);

    setIsPosting(false);

    if (wasSuccessful) {
      console.log("Correcto");
      router.replace("/(my-skeleton-app)/(drawer)/home");
      return;
    }

    Alert.alert("Error", "Las credenciales no son las correctas");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 40 }}>
        <ThemedView className="gap-y-2" style={{ paddingTop: height * 0.3 }}>
          <ThemedText className="font-bold" type="h1">
            Ingresar
          </ThemedText>
          <ThemedText type="normal">
            Por favor, ingrese para continuar
          </ThemedText>
        </ThemedView>

        <ThemedView className="gap-y-4 mt-4">
          <ThemedTextInput
            autoCapitalize="none"
            icon="mail-outline"
            keyboardType="email-address"
            onChangeText={(value) => setForm({ ...form, email: value })}
            placeholder="Correo electrónico"
            value={form.email}
          />

          <ThemedTextInput
            alternativeIcon
            autoCapitalize="none"
            icon="lock-closed-outline"
            onChangeText={(value) => setForm({ ...form, password: value })}
            placeholder="Contraseña"
            value={form.password}
          />
        </ThemedView>

        <View style={{ marginVertical: 10 }} />

        <ThemedButton
          className="p-2 rounded-md"
          disabled={isPosting}
          icon="arrow-forward-outline"
          textClassName="text-center text-xl"
          onPress={onLogin}
        >
          Ingresar
        </ThemedButton>

        <View style={{ marginVertical: 10 }} />

        <View className="gap-y-4 items-center justify-center">
          <ThemedText>¿No tienes una cuenta?</ThemedText>
          <ThemedLink href="/auth/register">Crear cuenta</ThemedLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
