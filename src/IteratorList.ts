export default interface IteratorList<T> {
    next(): T | undefined
    hasMore(): boolean;
    current(): T;
    reset(): void;
}

