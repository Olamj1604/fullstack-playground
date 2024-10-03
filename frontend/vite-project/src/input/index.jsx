import "./index.css";

export default function MovieInput({label, inputProps}) {
    return (
        <>
        <div className="movie-input">
            {label && <label className="">{label}</label>}
            <input className="form-input" {...inputProps} />
        </div>
        </>
    )
}