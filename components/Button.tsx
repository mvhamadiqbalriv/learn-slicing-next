import classnames from "classnames";

export default function Button({className, variant, children, pill}) {
    const variants = {
        "outline-yellow": `border border-yellow-500 hover:bg-yellow-600 hover:text-black hover:bg-yellow-500 text-yellow-500`,
        "yellow": "bg-yellow-500 hover:bg-yellow-600 text-black",
        "white": "bg-white text-black"
    }
    const pickedVariant = variants[variant];

    return (
        <a className={classnames(
            "border font-semibold text-lg py-3 px-10 inline-block",
            pill && "rounded-full",
            pickedVariant,
            className
        )}>
            {children}
        </a>
  )
}