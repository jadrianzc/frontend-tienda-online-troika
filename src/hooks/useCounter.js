import { useState } from 'react';

export const useCounter = (cantidad) => {
	const [counter, setCounter] = useState(cantidad);

	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	return {
		counter,
		increment,
		decrement,
	};
};
