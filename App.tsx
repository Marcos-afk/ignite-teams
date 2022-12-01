import { Groups } from '@screens/Groups';
import { THEME } from '@theme/index';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Groups />
    </ThemeProvider>
  );
}
