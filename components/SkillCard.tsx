export default function SkillCard({name, level, image, imageClassName}){
    const addImageClassName = imageClassName ? `${imageClassName}` : "";
    return (
        <div className="bg-gray-800 shadow-skill rounded-lg p-8 flex items-center">
            <img src={image} alt="" className={`mr-6 ${imageClassName}`} />
            <div>
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-600">{level}</p>
            </div>
        </div>
    )
}