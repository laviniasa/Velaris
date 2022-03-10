import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../home';
import Perfil from '../perfil';
import Escreva from '../escreva';

const Drawer = createDrawerNavigator();

export default function Container() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Escreva" component={Escreva} />
        </Drawer.Navigator>
    );
}

