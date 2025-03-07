import "./ErrorMessage.css"

export default function ErrorMessage({ error, props}) {
    return (
        <p {...props}>{error}</p>
    )
}