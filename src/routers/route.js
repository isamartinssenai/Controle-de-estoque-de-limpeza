import {creatNativeStackNavigator} from '@react-navigation/native-stack';

export default function Router() {
    
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cadastro_user" component={Cadastro_user} />
            <Stack.Screen name="Edita_tarefa" component={Edita_tarefa} />
            <Stack.Screen name="Tarefas" component={Tarefas} />
        </Stack.Navigator>
    )
}