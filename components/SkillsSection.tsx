import ParagraphSection from "./ParagraphSection";
import TitleSection from "./TitleSection";
import SkillCard from "./SkillCard";

export default function SkillsSection(){
    return (
        <section className="py-28 px-10 bg-gray-900" id="skills">
            <div className="container mx-auto">
                <TitleSection>Skills</TitleSection>
                <ParagraphSection>Beberapa kemampuan saya.</ParagraphSection>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-4/12 w-full xl:px-6 md:px-4 pb-8">
                        <SkillCard
                            name="JavaScript"
                            level="Lanjutan"
                            image="/javascript.svg"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full xl:px-6 md:px-4 pb-8">
                        <SkillCard
                            name="React JS"
                            level="Menengah"
                            image="/react.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full xl:px-6 md:px-4 pb-8">
                        <SkillCard
                            name="Node JS"
                            level="Lanjutan"
                            image="/node.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full xl:px-6 md:px-4 pb-8">
                        <SkillCard
                            name="Node JS"
                            level="Lanjutan"
                            image="/node.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full xl:px-6 md:px-4 pb-8">
                        <SkillCard
                            name="JavaScript"
                            level="Lanjutan"
                            image="/javascript.svg"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full xl:px-6 md:px-4 pb-8">
                        <SkillCard
                            name="React JS"
                            level="Menengah"
                            image="/react.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full xl:px-6 md:px-4 pb-8">
                        <SkillCard
                            name="React JS"
                            level="Menengah"
                            image="/react.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full xl:px-6 md:px-4 pb-8">
                        <SkillCard
                            name="Node JS"
                            level="Lanjutan"
                            image="/node.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full xl:px-6 md:px-4 pb-8">
                        <SkillCard
                            name="JavaScript"
                            level="Lanjutan"
                            image="/javascript.svg"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}