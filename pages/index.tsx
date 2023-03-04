import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import ProfileSection from "@/components/ProfileSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"

export default function Home() {
  return (
    <>
        <Hero />
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
    </>
  )
}