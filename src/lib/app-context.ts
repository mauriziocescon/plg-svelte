import { createContext } from 'svelte';

export interface AppContext {
	appName: string;
	version: string;
}

export const [getAppContext, setAppContext] = createContext<AppContext>();
