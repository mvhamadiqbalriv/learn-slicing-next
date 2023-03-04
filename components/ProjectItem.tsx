export default function ProjectItem({name, description, image}){
    return (
        <article className="text-center">
            <img src={image} className="w-full rounded-lg" />
            <h3 className="text-2xl font-semibold mb-1 mt-4">{name}</h3>
            <p className="text-lg text-gray-600">{description}</p>
        </article>
    );
}