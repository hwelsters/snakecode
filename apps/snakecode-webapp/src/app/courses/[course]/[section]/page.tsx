import Navbar from "@/components/common/navbar";
import CourseSection from "@/components/modules/courses/[course]/[section]/course-section";
import { getAllStaticPaths, getSection } from "@/utils/content";

export default function Courses({ params }: { params: { course: string; section: string } }) {
  const section: any = getSection(params.course, params.section);
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

export const generateStaticParams = async () => {
  return getAllStaticPaths().map((path) => path.params);
};
