import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

// Liste mise à jour avec vos nouvelles sections
const routeList: RouteProps[] = [
  {
    href: "#benefits",
    label: "Avantages",
  },
  {
    href: "#demos",
    label: "Démos",
  },
  {
    href: "#pricing",
    label: "Tarifs",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user scrolls down more than 10px
      setScrolled(window.scrollY > 10);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount and cleanup on unmount

  return (
    <header
      className={`sticky border-b-[1px] top-0 z-40 w-full transition-all duration-300 dark:border-b-slate-700 ${
        scrolled
          ? "bg-white/90 dark:bg-background/90 backdrop-blur-sm" // Classes when scrolled
          : "bg-white dark:bg-background" // Classes when at top
      }`}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex items-center"
            >
              <LogoIcon />
              <span className="flex items-center pt-1">D-Solution IA</span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    D-Solution IA
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://wa.me/33612345678?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20votre%20solution%20d'automatisation%20WhatsApp%20et%20j'aimerais%20en%20savoir%20plus."
                    target="_blank"
                    className={`w-[180px] border bg-green-500 hover:bg-green-600 text-white ${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 448 512" 
                      className="h-6 w-6 fill-white mr-2 inline"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-65.7-10.1-94.2-29.2l-6.7-4-69.8 18.3L72 359.2l-4.5-7c-18.9-29.7-29.9-65.4-29.9-102.1 0-108.5 88.2-196.6 196.6-196.6 53 0 102.8 20.8 138.9 57.2 36.2 36.2 57.2 86 57.2 138.9-.1 108.5-88.3 196.6-196.7 196.6zm101.7-164.7c-3.9-2-23.1-11.4-26.7-12.7-3.6-1.3-6.3-2-9 2-2.6 4-10.1 12.7-12.4 15.3-2.2 2.6-4.5 2.9-8.3 1s-16.4-6-31.2-19.2c-11.9-10.6-20.1-23.7-22.5-27.9s-.3-6.3 1.9-8.3c1.9-1.7 4.1-4.5 6.2-6.7 2-2.2 2.6-3.9 3.9-6.6 1.3-2.6 0-5-1-7s-9-21.6-12.3-29.5c-3.2-7.8-6.4-6.7-9-6.7-2.6 0-5.5-.3-8.3-.3s-6.3.9-9.7 4.4c-3.3 3.4-12.9 12.6-12.9 30.6 0 18 13.2 35.4 15 37.8 1.8 2.4 26.1 39.6 63.1 55.7 8.9 3.8 16.7 6 22.4 7.7 5.8 1.7 11.1 1.5 15.3 1 4.5-.5 14.1-5.8 16.1-11.4 2-5.6 2-10.4 1.4-11.4-.6-1-3.2-2-7.1-4z"/>
                    </svg>
                    Discuter sur WhatsApp
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://wa.me/33612345678?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20votre%20solution%20d'automatisation%20WhatsApp%20et%20j'aimerais%20en%20savoir%20plus."
              target="_blank"
              className={`border bg-green-500 hover:bg-green-600 text-white ${buttonVariants({ variant: "default" })}`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                className="h-6 w-6 fill-white mr-2"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-65.7-10.1-94.2-29.2l-6.7-4-69.8 18.3L72 359.2l-4.5-7c-18.9-29.7-29.9-65.4-29.9-102.1 0-108.5 88.2-196.6 196.6-196.6 53 0 102.8 20.8 138.9 57.2 36.2 36.2 57.2 86 57.2 138.9-.1 108.5-88.3 196.6-196.7 196.6zm101.7-164.7c-3.9-2-23.1-11.4-26.7-12.7-3.6-1.3-6.3-2-9 2-2.6 4-10.1 12.7-12.4 15.3-2.2 2.6-4.5 2.9-8.3 1s-16.4-6-31.2-19.2c-11.9-10.6-20.1-23.7-22.5-27.9s-.3-6.3 1.9-8.3c1.9-1.7 4.1-4.5 6.2-6.7 2-2.2 2.6-3.9 3.9-6.6 1.3-2.6 0-5-1-7s-9-21.6-12.3-29.5c-3.2-7.8-6.4-6.7-9-6.7-2.6 0-5.5-.3-8.3-.3s-6.3.9-9.7 4.4c-3.3 3.4-12.9 12.6-12.9 30.6 0 18 13.2 35.4 15 37.8 1.8 2.4 26.1 39.6 63.1 55.7 8.9 3.8 16.7 6 22.4 7.7 5.8 1.7 11.1 1.5 15.3 1 4.5-.5 14.1-5.8 16.1-11.4 2-5.6 2-10.4 1.4-11.4-.6-1-3.2-2-7.1-4z"/>
              </svg>
              Discuter sur WhatsApp
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
