import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Button, Image, Text, View } from "react-native";
import { Intro } from "./Intro";

export const Onboading = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  const handleIntroAnimationComplete = () => {
    setIsIntroVisible(false);
  };

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsIntroVisible(false);
    }, 1500);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <View className="max-w-sm w-full flex justify-center items-center flex-1 bg-slate-400 relative">
      <Intro
        onAnimationComplete={handleIntroAnimationComplete}
        state={isIntroVisible}
      />
      <Text style={{ color: "white", fontSize: 60 }}>!</Text>
    </View>
  );
};
