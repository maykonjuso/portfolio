import { Github } from 'lucide-react'

export default function Tools({
  tools,
  rep,
}: {
  tools: string[]
  rep?: string
}) {
  return (
    <div className="flex gap-2">
      <ul className="flex flex-row flex-wrap gap-2">
        {tools.map((tool) => (
          <div key={tool}>
            <li className="rounded-full bg-blue-100/20 px-3 py-1 font-bold text-blue-100">
              {tool}
            </li>
          </div>
        ))}
        {rep && (
          <a
            href={rep}
            target="_blank"
            className="flex max-w-fit flex-row items-center gap-2 rounded-full border border-white-10 bg-white-10 px-3 py-1 duration-200 hover:opacity-90"
          >
            <Github size={16} strokeWidth={2.5} color="#f9f9f9" />
            <span className="text-sm font-medium text-white-100">
              Repositório
            </span>
          </a>
        )}
      </ul>
    </div>
  )
}
