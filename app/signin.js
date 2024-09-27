import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import clsx from 'clsx';

import { useSession } from '../hooks/useSession';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { logIn } = useSession();

  return (
    <View className='justify-center h-full p-4'>
      <Text className='font-bold text-2xl'>
        Bienvenido
      </Text>
      <Text className='font-medium text-sm mt-2'>
        Inicia sesión para continuar con <Text className='text-blue-600 font-bold'>Mis Notas - App</Text>
      </Text>

      <View className='mt-10 space-y-5'>
        <View>
          <Text className='mb-1 text-sm font-medium text-gray-600'>Nombre de usuario</Text>
          <TextInput
            className='border border-gray-600 rounded-md py-1 px-3'
            value={name}
            onChangeText={setName}
            placeholder='ex. Sergio Perez'
          />
        </View>

        <View className='mb-4'>
          <Text className='mb-1 text-sm font-medium text-gray-600'>Correo electrónico</Text>
          <TextInput
            className='border border-gray-600 rounded-md py-1 px-3'
            value={email}
            onChangeText={setEmail}
            placeholder='ex. admin@email.com'
            inputMode='email'
          />
        </View>

        <Pressable
          className={clsx(
            'rounded-md py-2',
            (name === '' || email === '') ? 'bg-blue-600/50' : 'bg-blue-600 active:bg-blue-600/90 '
          )}
          disabled={name === '' || email === ''}
          onPress={() => {
            logIn(name, email);
            router.replace('/');
          }}
        >
          <Text className='text-white font-bold text-center'>Acceder</Text>
        </Pressable>
      </View>
    </View>
  );
};
