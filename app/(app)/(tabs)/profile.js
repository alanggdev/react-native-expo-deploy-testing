import { View, Text, Pressable } from 'react-native';

import { useSession } from '../../../hooks/useSession';

export default function ProfileView() {
  const { session, logOut } = useSession();

  return (
    <View className='items-center justify-center space-y-3 mt-5'>
      <View>
        <Text className='text-center'>Nombre</Text>
        <Text className='text-center font-bold'>{session.name}</Text>
      </View>
      <View>
        <Text className='text-center'>Correo electrónico</Text>
        <Text className='text-center font-bold'>{session.email}</Text>
      </View>
      <Pressable
        className='rounded-md px-5 py-2 bg-blue-600 active:bg-blue-600/90'
        onPress={() => {
          logOut();
        }}
      >
        <Text className='text-white font-bold text-center'>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
};
