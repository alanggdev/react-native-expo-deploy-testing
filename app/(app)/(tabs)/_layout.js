import { Tabs } from 'expo-router';

import ChatIcon from '../../../components/Icons/Chat';
import NotificationIcon from '../../../components/Icons/Notification';
import ProfileIcon from '../../../components/Icons/ProfileIcon';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff', height: 60 },
        tabBarLabelStyle: { marginBottom: 8 },
        tabBarActiveTintColor: '#2563eb',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Mensajes',
          tabBarIcon: ({ color }) => <ChatIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ color }) => <NotificationIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
};
