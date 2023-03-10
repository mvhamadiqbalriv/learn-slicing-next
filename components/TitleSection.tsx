export default function TitleSection({left, children}){
    return (
        <h2 className={`text-2xl font-semibold font-mono ${!left ? "text-center" : ""}`}>{children}</h2>
    );
}