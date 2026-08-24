import { createContext } from 'svelte';

export interface AppContextSvelte {
	appName: string;
	version: string;
}

export const [getAppContext, setAppContext] = createContext<AppContextSvelte>();
