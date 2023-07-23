import { IWrappedComponentsProps } from "@/types/comman";
import { ForwardRefExoticComponent, MutableRefObject, RefAttributes, useEffect, useRef, useState } from "react";

export const getWindowWidth = () => {
    const { innerWidth: windowWidth } =
        typeof window !== 'undefined' ? window : { innerWidth: 0 }
    return { windowWidth }
};

export function withClickOutside(
    WrappedComponent: ForwardRefExoticComponent<
        IWrappedComponentsProps & RefAttributes<HTMLDivElement>
    >
) {
    const Component = () => {
        const [open, setOpen] = useState(false)
        const ref = useRef() as MutableRefObject<HTMLDivElement>

        useEffect(() => {

        }, [])
    }
}