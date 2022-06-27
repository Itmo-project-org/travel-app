import { FC } from 'react';
import { useTheme } from '@chakra-ui/react';

const Main: FC = () => {
  const theme = useTheme();

  return (
    <>
      <div style={{ color: `${theme.colors.brand.a}` }}>Hello</div>
      <div style={{ color: `${theme.colors.brand.b}` }}>Hello</div>
      <div style={{ color: `${theme.colors.brand.c}` }}>Hello</div>
    </>
  );
};

export default Main;
