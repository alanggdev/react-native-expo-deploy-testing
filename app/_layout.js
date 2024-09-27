import { Stack } from 'expo-router';
import { SessionProvider } from '../providers/SessionProvider';

function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name='signin' options={{ headerShown: false }} />
      <Stack.Screen name='(app)' options={{ headerShown: false }} />
    </Stack>
  );
};

function RootLayoutNav() {
  return (
    <SessionProvider>
      <StackLayout />
    </SessionProvider>
  );
};

export default RootLayoutNav;