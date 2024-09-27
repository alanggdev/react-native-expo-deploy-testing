import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';

import { useSession } from '../../hooks/useSession';

export default function AppLayout() {
  const { loadingSession, isAuthenticated } = useSession();

  if (loadingSession) {
    return <Text>Cargando...</Text>;
  }

  if (!isAuthenticated) {
    return <Redirect href='/signin' />;
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
};
