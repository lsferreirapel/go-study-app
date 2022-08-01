import React from "react";
import { ThemeProvider } from "react-native-magnus";

import { theme } from "@common/theme";
import { render as TestingRender } from "@testing-library/react-native";

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const render = (
  ui: React.ReactElement,
  createNodeMock?: (element: React.ReactElement) => any,
) => TestingRender(ui, { wrapper: AllTheProviders, createNodeMock });
