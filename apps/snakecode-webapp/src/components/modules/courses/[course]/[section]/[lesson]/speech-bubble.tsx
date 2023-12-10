interface SpeechBubbleProps {
    icon?: any
    title?: string
    description?: string
}

export default function SpeechBubble({ icon, title, description }: SpeechBubbleProps) {
    return (
        <div className="flex flex-col items-center justify-start mt-4">
            <div className="h-3 w-3 bg-white rotate-45 rounded-sm"></div>
            <div className="bg-white p-4 -my-2 rounded flex-1 flex flex-row space-x-2">
                <div className="items-center flex">{icon}</div>
                <div className="flex flex-col">
                    <div className="font-semibold -mb-1">{title}</div>
                    <div>{description}</div>
                </div>
            </div>
        </div>
    )
}