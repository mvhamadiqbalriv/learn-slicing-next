import classnames from "classnames"
import NavItem from "./NavItem"

export default function Nav({dir, classNames, scheme}) {
  const dirs = {
    horizontal: "flex justify-center space-x-10",
    vertical: "flex-col space-y-6"
  }

  const pickedDir = dirs[dir]

  return (
    <ul className={classnames(
      pickedDir,
      classNames
    )} >
        <NavItem scheme={scheme} href="#profile">Profile</NavItem>
        <NavItem scheme={scheme} href="#skills">Skills</NavItem>
        <NavItem scheme={scheme} href="#projects">Projects</NavItem>
        <NavItem scheme={scheme} href="#contact">Contact</NavItem>
    </ul>
  )
}