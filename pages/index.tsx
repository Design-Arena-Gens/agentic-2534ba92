import Layout from "@/components/Layout";
import Header from "@/components/Header";
import ModuleTimeline from "@/components/ModuleTimeline";
import ReadingGuide from "@/components/ReadingGuide";
import SectionDetail from "@/components/SectionDetail";
import StoryBeats from "@/components/StoryBeats";
import VisualStory from "@/components/VisualStory";
import Glossary from "@/components/Glossary";
import PracticePrompts from "@/components/PracticePrompts";
import { modules } from "@/content/modules";

const currentModule = modules.find((module) => module.status === "current");

export default function Home() {
  return (
    <Layout>
      <Header />
      <ModuleTimeline />

      {currentModule && (
        <section className="mt-20 space-y-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-midnight">
              Depth 1 Full Walkthrough
            </span>
            <h2 className="text-3xl font-semibold text-midnight lg:text-4xl">
              {currentModule.title}
            </h2>
            <p className="max-w-3xl text-base text-slate-600 sm:text-lg">
              {currentModule.subtitle}. Niche diye gaye sections ko ek immersive
              lecture ki tarah follow karo.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {currentModule.sections.map((section, index) => (
              <SectionDetail key={section.id} section={section} index={index} />
            ))}
          </div>
        </section>
      )}

      <VisualStory />
      <StoryBeats />
      <Glossary />
      <PracticePrompts />
      <ReadingGuide />
    </Layout>
  );
}
