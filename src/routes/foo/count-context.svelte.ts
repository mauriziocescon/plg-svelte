import { createContext } from 'svelte';

export class Count {
	#c: number;
	#desc = getTextContext();

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

	desc() {
		return this.#desc.desc;
	}
}

const [getTextContext, setTextContext] = createContext<{ desc: string }>();
const [getCountContext, setCountContext] = createContext<Count>();

export function defineContext(desc: () => string, value: () => number) {
	setTextContext({ desc: desc() });
	setCountContext(new Count(value));
}

export function useCounter() {
	return getCountContext();
}
