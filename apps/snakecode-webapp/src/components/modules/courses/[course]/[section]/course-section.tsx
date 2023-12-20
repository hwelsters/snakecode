import { useMemo } from "react";

import CourseUnit from "./course-unit";

type CourseSectionType = {
  index: number;
  title: string;
  description: string;
  units: Array<any>;
};

export default function CourseSection({ index, title, description, units }: CourseSectionType) {
  const numberOfLessons = useMemo(() => units.reduce((partialSum, unit) => partialSum + unit.lessons.length, 0), [units]);

  return (
    <>
      <div className="mt-12 flex h-fit w-full flex-col bg-bc p-4">
        <span className="font-sans text-xs text-pt">SECTION {index}</span>
        <span className="font-display text-3xl">{title}</span>
        <span className="font-sans text-st">{description}</span>
        <span className="mt-4 font-sans text-xs text-st">{numberOfLessons} lessons</span>
      </div>

      {units.map((unit, unitIndex) => (
        <CourseUnit key={unit.title} index={unitIndex} title={unit.title} description={unit.description} lessons={unit.lessons} />
      ))}
    </>
  );
}
