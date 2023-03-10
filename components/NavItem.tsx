import classnames from "classnames"

export default function NavItem({href, children, scheme}) {

  const schemes = {
    light: "text-white",
    dark: "text-black"
  }

  const pickedScheme = schemes[scheme]

  return (
    <li>
        <a 
            href={href} 
            className={classnames(
              "text-white text-lg text-opacity-60 hover:text-opacity-100 transition font-semibold",
              pickedScheme
            )}
        >{children}</a>
    </li>
  )
}