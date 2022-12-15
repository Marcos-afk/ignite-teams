import { Loading } from '@components/Loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from '@theme/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={THEME}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}
