import { ColorSchemesSwitcher } from '@/components';
import { Center } from '@mantine/core';

export default function Home() {
  return (
    <Center w={'100vw'} h={'100dvh'}>
      <ColorSchemesSwitcher />
    </Center>
  );
}
