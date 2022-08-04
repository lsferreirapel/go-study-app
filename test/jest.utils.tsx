import React from "react";
import { ThemeProvider } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";

import { theme } from "@common/theme";
import { render as TestingRender } from "@testing-library/react-native";

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
};

export const render = (
  ui: React.ReactElement,
  createNodeMock?: (element: React.ReactElement) => any,
) => TestingRender(ui, { wrapper: AllTheProviders, createNodeMock });
