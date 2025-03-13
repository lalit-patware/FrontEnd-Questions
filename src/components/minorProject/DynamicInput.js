import { useState } from "react"

const DynamicInput = () => {
    const [inputs, setInputs] = useState([{ id: Date.now(), value: '', type: 'text' }])
    const handleChange = (id, e) => {
        setInputs((prevInputs) =>
            prevInputs.map((input) => (
                input.id === id ? { ...input, value: e.target.value } : input
            ))
        )
    }

    const handleAddInput = () => {
        setInputs((prevInputs) => [...prevInputs, { id: Date.now(), value: '', type: 'text' }])
    }
    const handleRemoveInput = (id) => {
        setInputs((prevInputs) =>
            prevInputs.filter((input) => input.id !== id)
        )
    }
    return (
        <>
            {
                inputs.map((input) => (
                    <div key={input.id} style={{ display: 'flex', alignContent: 'center', textAlign: 'center' }}>
                        <input
                            style={{ flexDirection: 'vertical' }}
                            type={input.type}
                            name="userName"
                            value={input.value}
                            onChange={(e) => handleChange(input.id, e)} />
                        {inputs.length > 1 && <button onClick={() => handleRemoveInput(input.id)}>Remove</button>}
                    </div>
                ))
            }
            <button onClick={handleAddInput}>Add</button>

            <div>
                <h3>Current Input Values:</h3>
                <ul>
                    {inputs.map((input) => (
                        <li key={input.id}>{input.value}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default DynamicInput

