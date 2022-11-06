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
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={Home} />
        </HomeStack.Navigator>
    );
}

const HeadphonesStack = createNativeStackNavigator();
function HeadphonesStackScreen() {
    return (
        <HeadphonesStack.Navigator>
            <HeadphonesStack.Screen name="Headphones" component={Headphones} />
            <HeadphonesStack.Screen name="Details" component={ProductDetails} />
        </HeadphonesStack.Navigator>
    );
}

const EarphonesStack = createNativeStackNavigator();
function EarphonesStackScreen() {
    return (
        <EarphonesStack.Navigator>
            <EarphonesStack.Screen name="Earphones" component={Earphones} />
            <EarphonesStack.Screen name="Details" component={ProductDetails} />
        </EarphonesStack.Navigator>
    );
}

const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreen() {
    return (
        <SpeakersStack.Navigator>
            <SpeakersStack.Screen name="Speakers" component={Speakers} />
            <SpeakersStack.Screen name="Details" component={ProductDetails} />
        </SpeakersStack.Navigator>
    );
}

const CartStack = createNativeStackNavigator();
function CartStackScreen() {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="Cart" component={Cart} />
            <CartStack.Screen name="Checkout" component={Checkout} />
        </CartStack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer theme={THEME}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="HomeTab" component={HomeStackScreen} />
                <Tab.Screen name="HeadphonesTab" component={HeadphonesStackScreen} />
                <Tab.Screen name="EarphonesTab" component={EarphonesStackScreen} />
                <Tab.Screen name="SpeakersTab" component={SpeakersStackScreen} />
                <Tab.Screen name="CartTab" component={CartStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}