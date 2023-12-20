interface SpeechBubbleProps {
  icon?: any;
  title?: string;
  description?: string;
}

export default function SpeechBubble({ icon, title, description }: SpeechBubbleProps) {
  return (
    <div className="mt-4 flex flex-col items-center justify-start">
      <div className="h-3 w-3 rotate-45 rounded-sm bg-white" />
      <div className="-my-2 flex flex-1 flex-row space-x-2 rounded bg-white p-4">
        <div className="flex items-center">{icon}</div>
        <div className="flex flex-col">
          <div className="-mb-1 font-semibold">{title}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
