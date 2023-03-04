import ProjectItem from "./ProjectItem";
import SectionParagraph from "./ParagraphSection";
import SectionTitle from "./TitleSection";

export default function ProjectsSection(){
    return (
        <section className="py-28 px-10" id="projects">
            <div className="container mx-auto">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem
                            name="Hasten"
                            description="Explorasi landing page"
                            image="/hasten.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem
                            name="Resources"
                            description="Explorasi resource page"
                            image="/resources.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem
                            name="Resources"
                            description="Explorasi resource page"
                            image="/resources.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem
                            name="Hasten"
                            description="Explorasi landing page"
                            image="/hasten.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}