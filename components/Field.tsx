export default function Field({label, name, type}){
    const formControlClassName = "bg-transparent border border-gray-300 py-3 px-8 w-full";
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block mb-1 text-lg font-semibold">{label}</label>
            {type === "text" && (
                <input type={type} name={name} id={name} className={formControlClassName} />
            )}
            {type === "textarea" && (
                <textarea name={name} id={name} cols="30" rows="6" className={formControlClassName}></textarea>
            )}
        </div>
    );
}