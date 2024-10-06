"use client"


import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const isScrolled = useScrollTop();

    return ( 
        <div className={cn("flex items-center fixed w-full top-0 transition-shadow justify-between p-6",isScrolled && "border-b shadow-md")}>
            <Logo></Logo>
            <div>
                <Button>Login</Button>
            </div>

        </div>
    );
}
 
export default Navbar;