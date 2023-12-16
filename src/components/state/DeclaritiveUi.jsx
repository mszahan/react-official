import { useState } from "react"


export default function Form () {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing')

    if (status === 'success') {
        return <h1>That's right</h1>
    }

    if (status ==='submitting') {
        return <h1>submitting the form ....</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');

        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing')
            setError(err);
        }
    }

    function handleTextAreaChange(e) {
        setAnswer(e.target.value)
    }

    return (
        <div>

            <h2>City quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water?</p>
            <form onSubmit={handleSubmit}>
                <textarea
                value={answer}
                onChange={handleTextAreaChange}
                disabled={status === 'submitting'}
                />
                <br />
                <button
                disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }
                >
                    Submit</button>

                    {
                        error !== null &&
                        <p className="error">
                            {error.message}
                        </p>
                    }
            </form>
        </div>
    )

    function submitForm(answer) {
        // pretend it's hitting the network
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if (shouldError) {
                    reject(new Error('Wrong answer, try again'));
                } else {
                    resolve();
                }
            }, 1500)
        })
    }
}