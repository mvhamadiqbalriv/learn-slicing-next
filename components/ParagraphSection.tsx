export default function ParagraphSection({ left, children }){
    return (
        <p className={`text-lg mt-2 text-gray-600 ${!left ? "text-center" : ""} `}>
            {children}
        </p>
    )
}