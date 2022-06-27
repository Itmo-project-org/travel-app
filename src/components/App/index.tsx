import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../lib/chakraUI/theme';
import Main from '../Main';

const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
};

export default App;
