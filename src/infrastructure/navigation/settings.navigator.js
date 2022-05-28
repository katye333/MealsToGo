import React, { useEffect } from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            headerMode="screen"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
        
            <SettingsStack.Screen options={{header: () => null}} name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
        </SettingsStack.Navigator>   
    )
}