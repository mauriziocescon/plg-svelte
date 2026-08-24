import { createContext } from 'svelte';

export class Count {
	#c: number;

	constructor(value: () => number) {
		this.#c = $derived.by(value);
	}

	getCount() {
		return this.#c;
	}

	setCount(value: number) {
		this.#c = value;
	}

	decrease() {
		this.#c -= 1;
	}

	increase() {
		this.#c += 1;
	}

	reset() {
		this.#c = 0;
	}
}

export const [getCountContext, setCountContext] = createContext<Count>();
