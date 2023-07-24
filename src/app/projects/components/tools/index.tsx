export default function Tools({ tools }: { tools: string[] }) {
  return (
    <ul className="flex flex-row flex-wrap gap-2">
      {tools.map((tool) => (
        <li
          key={tool}
          className="rounded-full bg-blue-100/20 px-3 py-1 font-bold text-blue-100"
        >
          {tool}
        </li>
      ))}
    </ul>
  )
}
