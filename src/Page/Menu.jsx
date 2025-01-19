import { Menubar, MenubarMenu } from "@/components/ui/menubar"
import * as MenubarPrimitive from "@radix-ui/react-menubar"

export function Menu() {
  return (
    <Menubar className="space-x-6 p-2 flex items-center justify-center bg-white rounded-xl shadow-lg ">
      <MenubarMenu>
        <MenubarPrimitive.Trigger className="p-3 text-black hover:text-gray-500  border-none cursor-pointer">Home</MenubarPrimitive.Trigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarPrimitive.Trigger className="p-3 text-black hover:text-gray-500  cursor-pointer">About</MenubarPrimitive.Trigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarPrimitive.Trigger className="p-3 text-black hover:text-gray-500 cursor-pointer">Skills</MenubarPrimitive.Trigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarPrimitive.Trigger className="p-3 text-black hover:text-gray-500  cursor-pointer">Projects</MenubarPrimitive.Trigger>
      </MenubarMenu>
      <MenubarMenu>
        <a href="https://drive.google.com/file/d/1jZa9ag1DH9KHnsfWEuUda4f9FDiJc7wz/view?usp=sharing">
        <MenubarPrimitive.Trigger className="p-3 text-black hover:text-gray-500  cursor-pointer">Resume</MenubarPrimitive.Trigger>
        </a>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarPrimitive.Trigger className="p-3 text-black  hover:text-gray-500 cursor-pointer">Contact</MenubarPrimitive.Trigger>
      </MenubarMenu>
    </Menubar>
  )
}
