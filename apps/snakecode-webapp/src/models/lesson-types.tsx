export interface DescriptionProps {
  type: "description";
  main: string;
}

export interface QuizProps {
  type: "quiz";
  main: string;
  options: Array<string>;
  correct: number;
}

export interface CodeProps {
  type: "coding";
  main: string;
  template: string;
}
