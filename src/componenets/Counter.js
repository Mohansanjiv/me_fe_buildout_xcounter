import { useState } from "react";



const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "50px",
                fontFamily: "Arial, sans-serif",
            }}
        >
              <h1>Count: {count}</h1>
            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={() => setCount(count + 1)}
                    style={{
                        margin: "5px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    style={{
                        margin: "5px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
export default Counter;
