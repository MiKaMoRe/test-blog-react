import React from "react"

import Image from "next/image"
// import Link from "next/link"
// import { 
//     NavigationMenu,
//     NavigationMenuList,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

export default function Header() {
    return (
        <header className="">
            <Image src={"/logo.png"} alt="logo" width={400} height={400} className="basis-1/5 w-52" />
            {/* <NavigationMenu className="basis-3/5" >
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Documentation
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu> */}
        </header>
    )
}