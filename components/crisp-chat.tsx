"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4a99d5aa-ff2c-4a35-8f27-d6ab13e2f6c6");
  }, []);

  return null;
};
