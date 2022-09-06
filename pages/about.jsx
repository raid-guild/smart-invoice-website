import { Layout } from "../components/layout/Layout"
import { HeroSection } from "../components/about/Hero"
import { Story } from "../components/about/Story"
import { TeamSection } from "../components/about/Team"
import { Supporters } from "../components/about/Supporters"
import { CallToAction } from "../components/layout/CallToAction"
import { Testimonials } from "../components/about/Testimonials"


export default function About() {
  return (
    <Layout>
      <HeroSection maxWidth={1400} />
      <Story maxWidth={1400} />
      <TeamSection maxWidth={1400} />
      <Supporters maxWidth={1400} />
      {/* <Testimonials maxWidth={1400} /> */}
      <CallToAction maxWidth={1400} />
    </Layout>
  )
}