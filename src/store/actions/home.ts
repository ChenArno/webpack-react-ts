
export const COUNT = "home/COUNT";

export function setCount(count: number) {
	return { type: COUNT, value: count };
}