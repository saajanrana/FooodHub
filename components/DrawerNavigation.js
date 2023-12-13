
import { NavigationContainer } from '@react-navigation/native';

import MyProfile from '../screen/MyProfile';

import { createDrawerNavigator } from '@react-navigation/drawer';





const Drawer = createDrawerNavigator();
const DrawerNavigation= () =>{

return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Profile" component={MyProfile} />
        </Drawer.Navigator>
    </NavigationContainer>
)

}

export default DrawerNavigation;
