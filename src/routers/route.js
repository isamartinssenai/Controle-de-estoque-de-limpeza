import {creatNativeStackNavigator} from '@react-navigation/native-stack';

export default function Router() {
    
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="cadastro_usuario" component={cadastro_usuario} />
        </Stack.Navigator>
    )
}