import { House, LucideProps,  History, Video,CalendarClock ,Plus } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface SideLinks {
    providedImg: "component" | "url",
    Img: string | (ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>),
    route: string,
    label: string
}


export const SidebarLinks: SideLinks[] = [
    {
        providedImg: "component",
        Img: House,
        route: "/",
        label: "Home"
    },
    {
        providedImg: "component",
        Img: CalendarClock ,
        route: "/upcoming",
        label: "Upcoming"
    },
    {
        providedImg: "component",
        Img: History,
        route: "/previous",
        label: "Previous"

    },
    {
        providedImg: "component",
        Img: Video,
        route: "/recordings",
        label: "Recordings"

    },
    {
        providedImg: "component",
        Img: Plus ,
        route: "/personal-room",
        label: "Personal Room"

    }
]