import { Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/UseAuth";

import { AppRoutes } from "./app.routes";
import { Singin } from "../screens/Singin";

export function Routes() {
  const { user } = useAuth();
  return (
    <Box flex={1} bgColor="gray.900">
      <NavigationContainer>
        {user.name ? <AppRoutes /> : <Singin />}
      </NavigationContainer>
    </Box>
  );
}
