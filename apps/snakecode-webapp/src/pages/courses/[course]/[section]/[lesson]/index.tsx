import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import Coding from "@/components/modules/courses/[course]/[section]/[lesson]/coding";
import Description from "@/components/modules/courses/[course]/[section]/[lesson]/description";
import Quiz from "@/components/modules/courses/[course]/[section]/[lesson]/quiz";
import clampNumber from "@/utils/clampNumber";
import { getAllStaticPaths, getLesson } from "@/utils/content";
import removeLastPathSegment from "@/utils/removeLastPathSegment";

// TODO: Define a type for lesson instead of using any.
export default function Lesson({ lesson }: { lesson: Array<any> }) {
  const router = useRouter();

  // The number of pages in the lesson that the user has successfully completed.
  const [completedPagesCount, setCompletedPagesCount] = useState<number>(0);

  // The page in the lesson which is currently visible on screen.
  const [visiblePageIndex, setVisiblePageIndex] = useState<number>(0);

  const completePage = () => {
    const newCompletedPagesCount = clampNumber(visiblePageIndex + 1, completedPagesCount, lesson.length);
    setCompletedPagesCount(newCompletedPagesCount);
    setVisiblePageIndex(clampNumber(visiblePageIndex + 1, 0, newCompletedPagesCount));
  };

  const nextPage = () => {
    setVisiblePageIndex(clampNumber(visiblePageIndex + 1, 0, completedPagesCount));
  };

  const previousPage = () => {
    setVisiblePageIndex(clampNumber(visiblePageIndex - 1, 0, completedPagesCount));
  };

  const parseLesson = () => {
    if (visiblePageIndex === lesson.length) return <div />;

    const currentPage = lesson[visiblePageIndex];
    switch (currentPage.type) {
      case "description":
        return <Description text={currentPage.main} completePage={completePage} />;
      case "quiz":
        return <Quiz text={currentPage.main} options={currentPage.options} correct={currentPage.correct} completePage={completePage} />;
      case "coding":
        return <Coding text={currentPage.main} template={currentPage.template} answer={currentPage.answer} completePage={completePage} />;
      default:
        throw new Error(`${String(currentPage.type)} is an invalid type!`);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-bg">
      <div className="absolute flex h-screen w-screen items-start justify-start text-pt">
        <button className="ml-5 mt-5 rounded-md p-2 hover:bg-bc" type="button" aria-label="go back to home" onClick={() => router.push(removeLastPathSegment(router.asPath))}>
          <CloseIcon className="z-10 scale-125" />
        </button>
      </div>
      <div className="z-10 flex w-11/12 max-w-lg flex-col items-center">
        {parseLesson()}
        <span className="mt-8 flex w-full max-w-sm flex-row justify-between">
          <button
            className="rounded-md border-2 bg-white p-1.5 text-pt shadow-[0_0.5rem_var(--color-primary)] enabled:active:translate-y-2 enabled:active:shadow-none disabled:brightness-90 dark:border-[var(--color-transparent)] dark:bg-pt dark:text-bg dark:disabled:brightness-75"
            type="button"
            aria-label="previous page"
            onClick={previousPage}
            disabled={visiblePageIndex === 0}
          >
            <KeyboardArrowLeftRoundedIcon />
          </button>
          <button
            className="rounded-md border-2 bg-white p-1.5 text-pt shadow-[0_0.5rem_var(--color-primary)] enabled:active:translate-y-2 enabled:active:shadow-none disabled:brightness-90 dark:border-[var(--color-transparent)] dark:bg-pt dark:text-bg dark:disabled:brightness-75"
            type="button"
            aria-label="next page"
            onClick={nextPage}
            disabled={visiblePageIndex === completedPagesCount}
          >
            <KeyboardArrowRightRoundedIcon />
          </button>
        </span>
        <span className="mt-10 h-3 w-full rounded-lg bg-bc">
          <div className="h-full rounded-lg bg-pc transition-all duration-500" style={{ width: `${visiblePageIndex * (100 / lesson.length)}%` }} />
        </span>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllStaticPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  // Read the lesson from the markdown file based on the app's current context
  const lesson = getLesson(context.params.course, context.params.section, context.params.lesson).data.content;

  return {
    props: {
      lesson,
    },
  };
};
