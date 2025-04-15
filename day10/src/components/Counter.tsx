

type Props = {
    count: number;
    onIncrement: () => void;
};

const Counter = ({ count, onIncrement }: Props) => {
    return (
        <div>
            <p data-testid="count-value">Count: {count}</p>
            <button onClick={onIncrement}>Increment</button>
        </div>
    )
}

export default Counter;