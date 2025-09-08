import { useState } from "react";

import { router } from "expo-router";

import {
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

export default function RegisterScreen() {
  const { register } = useAuthStore();
  const { height } = useWindowDimensions();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [isPosting, setIsPosting] = useState(false);

  const onRegister = async () => {
    const { fullName, email, password } = form;

    if (fullName.length === 0 || email.length === 0 || password.length === 0)
      return;

    setIsPosting(true);

    const wasSuccessfull = await register(fullName, email, password);

    setIsPosting(false);

    if (wasSuccessfull) {
      router.replace("/auth/login");
      return;
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 40 }}>
        <ThemedView className="gap-y-2" style={{ paddingTop: height * 0.3 }}>
          <ThemedText className="font-bold" type="h1">
            Crear cuenta
          </ThemedText>
          <ThemedText type="normal">
            Por favor, crea una cuenta para continuar
          </ThemedText>
        </ThemedView>

        <ThemedView className="gap-y-4 mt-4">
          <ThemedTextInput
            autoCapitalize="words"
            icon="person-outline"
            placeholder="Nombre completo"
            value={form.fullName}
            onChangeText={(value) => setForm({ ...form, fullName: value })}
          />

          <ThemedTextInput
            autoCapitalize="none"
            icon="mail-outline"
            keyboardType="email-address"
            placeholder="Correo electrónico"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
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
          onPress={onRegister}
        >
          Crear cuenta
        </ThemedButton>

        <View style={{ marginVertical: 10 }} />

        <View className="gap-y-4 items-center justify-center">
          <ThemedText>¿Ya tienes una cuenta?</ThemedText>
          <ThemedLink href="/auth/login">Ingresar</ThemedLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
