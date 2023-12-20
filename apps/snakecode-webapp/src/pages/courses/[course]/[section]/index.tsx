import Navbar from "@/components/common/navbar";
import CourseSection from "@/components/modules/courses/[course]/[section]/course-section";
import { getAllStaticPaths, getSection } from "@/utils/content";

export default function Courses({ section }: any) {
  return (
    <div className="bg-bg">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start text-pt">
        <div className="mb-24 flex w-full max-w-sm flex-col">
          <CourseSection key={section.weight} index={section.weight} title={section.title} description={section.description} units={section.units} />
        </div>
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: getAllStaticPaths(),
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  return {
    props: {
      section: getSection(context.params.course, context.params.section),
    },
  };
};
