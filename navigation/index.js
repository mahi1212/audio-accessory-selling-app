import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../src/screens/Cart";
import Checkout from "../src/screens/Checkout";
import Earphones from "../src/screens/Earphones";
import Headphones from "../src/screens/Headphones";
import Home from "../src/screens/Home";
import ProductDetails from "../src/screens/ProductDetails";
import Speakers from "../src/screens/Speakers";
import { colors } from "../src/theme/colors";
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';

const THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    }
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="home" component={Home} />
        </HomeStack.Navigator>
    );
}

const HeadphonesStack = createNativeStackNavigator();
function HeadphonesStackScreen() {
    return (
        <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
            <HeadphonesStack.Screen name="Headphones" component={Headphones} />
            <HeadphonesStack.Screen name="Details" component={ProductDetails} />
        </HeadphonesStack.Navigator>
    );
}

const EarphonesStack = createNativeStackNavigator();
function EarphonesStackScreen() {
    return (
        <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
            <EarphonesStack.Screen name="Earphones" component={Earphones} />
            <EarphonesStack.Screen name="Details" component={ProductDetails} />
        </EarphonesStack.Navigator>
    );
}

const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreen() {
    return (
        <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
            <SpeakersStack.Screen name="Speakers" component={Speakers} />
            <SpeakersStack.Screen name="Details" component={ProductDetails} />
        </SpeakersStack.Navigator>
    );
}

const CartStack = createNativeStackNavigator();
function CartStackScreen() {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen name="Cart" component={Cart} />
            <CartStack.Screen name="Checkout" component={Checkout} />
        </CartStack.Navigator>
    );
}

function TabBarIcon({ fontFamily, name, color }) {
    if (fontFamily === 'MaterialCommunityIcons') {
        return <MaterialCommunityIcons name={name} color={color} size={24} />
    } else if (fontFamily === 'Ionicons') {
        return <Ionicons name={name} color={color} size={24} />
    } else if (fontFamily === 'Feather') {
        return <Feather name={name} color={color} size={24} />
    }else {
        return <SimpleLineIcons name={name} color={color} size={24} />
    }
}

export default function Navigation() {
    return (
        <NavigationContainer theme={THEME}>
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.darkOrange }}>
                <Tab.Screen
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color }) => <TabBarIcon
                            fontFamily={'SimpleLineIcons'}
                            name="home"
                            color={color}
                        />
                    }}
                    name="HomeTab" component={HomeStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Headphones",
                        tabBarIcon: ({ color }) => <TabBarIcon
                            fontFamily={'MaterialCommunityIcons'}
                            name="headphones"
                            color={color}
                        />
                    }}
                    name="HeadphonesTab" component={HeadphonesStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Earphones",
                        tabBarIcon: ({ color }) => <TabBarIcon
                            fontFamily={'SimpleLineIcons'}
                            name="earphones-alt"
                            color={color}
                        />
                    }}
                    name="EarphonesTab" component={EarphonesStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Speakers",
                        tabBarIcon: ({ color }) => <TabBarIcon
                            fontFamily={'Feather'}
                            name="speaker"
                            color={color}
                        />
                    }}
                    name="SpeakersTab" component={SpeakersStackScreen}
                />

                <Tab.Screen
                    options={{
                        title: "Cart",
                        tabBarIcon : ({color}) => <TabBarIcon 
                            fontFamily={'Ionicons'}
                            name="cart-outline"
                        />
                    }}
                    name="CartTab" component={CartStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )

}