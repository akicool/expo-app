import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Intro } from "./app/intro/Intro";
import { Onboading } from "./app/intro/Onboading";

export default MobileApp = () => {


  return (
    <>
      <SafeAreaView className="w-full h-full">
        <Onboading />
      </SafeAreaView>
    </>
  );
};
