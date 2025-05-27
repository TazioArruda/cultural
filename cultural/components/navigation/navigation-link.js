export default function NavigationLink({ href, children }) {
  return (
    <a href={href} className="text-gray-600 hover:text-gray-900 transition-colors">
      {children}
    </a>
  )
}
