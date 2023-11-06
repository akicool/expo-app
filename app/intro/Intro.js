import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Button, Image, Text, View } from "react-native";
import { View as ViewAnimation } from "react-native-animatable";

import Logo from "../../assets/introImg/todo-logo.png";

export const Intro = ({ onAnimationComplete, state }) => {
  const handleAnimationComplete = () => {
    if (!state) {
      onAnimationComplete();
    }
  };

  return (
    <>
      <ViewAnimation
        className="absolute z-10 bg-black w-full h-full"
        
        animation={{
          from: { opacity: 1 },
          to: { opacity: 0 },
        }}
        duration={5000}
        isVisible={state}
        onAnimationComplete={handleAnimationComplete}
      >
        <View className="max-w-sm w-full flex justify-center items-center flex-1">
          <ViewAnimation animation="zoomIn" duration={1000}>
            <Image source={Logo} />
          </ViewAnimation>
          <ViewAnimation animation="zoomIn" duration={1000}>
            <Text className="text-white mt-5" style={{ fontSize: 40 }}>
              UpTodo
            </Text>
          </ViewAnimation>
        </View>
      </ViewAnimation>
    </>
  );
};
