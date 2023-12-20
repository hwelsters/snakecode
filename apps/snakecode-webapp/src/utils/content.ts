import fs from "node:fs";
import { join } from "node:path";

import graymatter from "gray-matter";

const contentDirectory = join(process.cwd(), "content");

const readMarkdown = (path: string) => {
  const fileContents = graymatter(fs.readFileSync(path));
  return { content: fileContents.content, data: fileContents.data };
};

const readFile = (path: string) => {
  const absoluteDirectory = join(contentDirectory, path);
  if (path.includes(".")) return readMarkdown(absoluteDirectory);
  return readMarkdown(join(absoluteDirectory, "_index.md"));
};

const listDirectories = (path: string) => {
  const absoluteDirectory = join(contentDirectory, path);
  return fs.readdirSync(absoluteDirectory).filter((directory: string) => !directory.includes("."));
};

const listFiles = (path: string) => {
  const absoluteDirectory = join(contentDirectory, path);
  return fs.readdirSync(absoluteDirectory).filter((directory: string) => directory.includes(".") && !directory.includes("_index.md"));
};

// TODO: REFACTOR THIS GARBAGE! ...OR MAYBE DON'T. YOU HAVE BETTER THINGS TO DO
// IF IT AIN'T BROKE, WHY FIX IT?
export const getAllStaticPaths = () => {
  const paths: any[] = [];
  listDirectories("").forEach((course: string): void => {
    listDirectories(course).forEach((section: string): void => {
      listDirectories(join(course, section)).forEach((lesson: string): void => {
        paths.push({
          params: {
            course,
            section,
            lesson: lesson.replace(".md", ""),
          },
        });
      });
    });
  });
  return paths;
};

export const getSection = (course: string, section: string) => {
  const sectionFilePath = join(course, section);
  const sectionData = readFile(sectionFilePath).data;
  const unitDatas = sectionData.units.map((unitData: any) => {
    return {
      ...unitData,
      lessons: unitData.lessons.map((lesson: string) => {
        const lessonFilePath = join(sectionFilePath, lesson, "_index.md");
        return { ...readFile(lessonFilePath).data, lesson };
      }),
    };
  });
  return { ...sectionData, units: unitDatas };
};

export const getLesson = (course: string, section: string, lesson: string) => {
  const lessonData = readFile(join(course, section, lesson, "_index.md")).data;
  const content = listFiles(join(course, section, lesson))
    .filter((file: string) => file !== "_index.md")
    .map((filePath) => join(course, section, lesson, filePath))
    .map((filePath) => readFile(filePath));
  return { content, data: lessonData };
};
