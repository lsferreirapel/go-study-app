import { useNavigation as useBaseNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@common/config/routes";

export function useUntypedNavigation() {
  return useBaseNavigation<NativeStackNavigationProp<any>>();
}

export function useNavigation() {
  return useBaseNavigation<NativeStackNavigationProp<RootStackParamList>>();
}
