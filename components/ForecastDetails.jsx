import { View, Text, FlatList, TouchableOpacity, } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

export default function ForecastDetails({route}) {
    return (
        <View style={{ height: '100%' }}>
           
            <Text>
                {route.params.name} {route.params.temperature}
            </Text>
        </View>
    )
}
