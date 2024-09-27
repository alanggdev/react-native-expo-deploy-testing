import { useContext } from 'react';
import { SessionContext } from '../providers/SessionProvider';

export const useSession = () => useContext(SessionContext);
