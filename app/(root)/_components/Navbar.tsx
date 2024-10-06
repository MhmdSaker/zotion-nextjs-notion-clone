"use client"


import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../../../components/ModeToggle";

const Navbar = () => {
    const isScrolled = useScrollTop();

    return ( 
        <div className={cn("flex items-center fixed w-full top-0 transition-shadow justify-between p-6",isScrolled && "border-b shadow-md")}>
            <Logo></Logo>
            <div className="flex space-x-3">
                <Button>Login</Button>
                <ModeToggle></ModeToggle>
            </div>

        </div>
    );
}
 
export default Navbar;