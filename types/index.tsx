import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

export type RootTabParamList = {
    Home: undefined;
    Business: undefined;
    TabTwo: undefined;
  };
  
  export type RootTabScreenProps<Screen extends keyof RootTabParamList> = NativeStackScreenProps<
    RootTabParamList,
    Screen
  >;
  