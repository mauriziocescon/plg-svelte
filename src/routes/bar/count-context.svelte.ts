import { createContext } from 'svelte';

export class Count {
	private count: number;

	constructor(value: () => number) {
		this.count = $derived(value());
	}

	getCount() {
		return this.count;
	}

	setCount(newCount: number) {
		this.count = newCount;
	}
}

export const [getCountContext, setCountContext] = createContext<Count>();
