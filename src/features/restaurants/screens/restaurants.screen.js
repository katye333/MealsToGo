import React, {useContext} from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
// import { FavoritesContext } from "../../../services/favorites/favorites.context";

import { Search } from "../components/search.component";

// FlatList needs the style to be applied to the contentContainerStyle
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, isLoading } = useContext(RestaurantsContext);
    // const { favorites } = useContext(FavoritesContext);
    
    return (
        <SafeArea>
            {
                isLoading &&
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.red200} />
                </LoadingContainer>
            }

            <Search />
            <RestaurantList 
                data={restaurants}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetailScreen", {restaurant: item})}>
                            <Spacer position={"bottom"} size={"large"}>
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
            />
            
        </SafeArea>
    )
}