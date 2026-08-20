import { createContext } from 'svelte';

export interface BarContext {
	count: number;
	setCount: (count: number) => void;
}

export const [getBarContext, setBarContext] = createContext<BarContext>();
