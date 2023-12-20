import CourseButton from "./lesson-button";

type CourseUnitType = {
  index: number;
  title: string;
  description: string;
  lessons: Array<any>; // Temporary
};

export default function CourseUnit({ index, title, description, lessons }: CourseUnitType) {
  return (
    <span className="mt-10 flex flex-col items-center space-y-10">
      <span className="mb-4 flex w-full max-w-md flex-row justify-center space-x-4 rounded-sm">
        <span className="flex aspect-square w-12 items-center justify-center bg-pc font-mono text-lg font-extrabold">{index}</span>
        <span className="flex flex-col">
          <span className="font-display text-xl">{title}</span>
          <span className="font-sans text-sm">{description}</span>
        </span>
      </span>
      {lessons.map((lesson) => (
        <CourseButton key={lesson.title} title={lesson.title} type={lesson.type} href={lesson.lesson} />
      ))}
    </span>
  );
}
