import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {Text} from 'react-native';

import Home from '../home';
import Perfil from '../perfil';
import Escreva from '../escreva';
import Leitura from '../leitura';
import DadosLivro from '../dadoslivro';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Drawer = createDrawerNavigator();

export default function Container() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false , 
            drawerStyle: {
            backgroundColor: 'purple',
            width: 200,
            },}}            
            drawerContent={props => {
                return (
                  <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem style={{ backgroundColor: 'white' }} label="Sair" onPress={async () => {     
                        await AsyncStorage.removeItem('userdata');
                        props.navigation.navigate("Login");
                    }} />
                    </DrawerContentScrollView>
                  )
                }}>

            <Drawer.Screen name="Home" component={Home} 
                options={{
                    drawerLabel: "Home",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Perfil" component={Perfil}
                options={{
                    drawerLabel: "Perfil",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Escreva" component={Escreva} 
                options={{
                    drawerLabel: "Escreva",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Leitura" component={Leitura}
                options={{
                    drawerLabel: "Leitura",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold'}
                }}
            />

            <Drawer.Screen name="DadosLivro" component={DadosLivro}
                options={{
                    drawerLabel: "Dados Livro",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold', height: 0},
                    drawerItemStyle: { height: 0 }
                }}
            />

        </Drawer.Navigator>
    );
}

