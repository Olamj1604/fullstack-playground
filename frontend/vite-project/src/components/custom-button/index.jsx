import "./index.css";

export default function CustomButton({type, label, onClick, className}) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {label}
        </button>
    )
}