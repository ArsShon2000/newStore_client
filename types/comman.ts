import { MultiValue, SingleValue } from "react-select"

export interface IWrappedComponentsProps {
    open: boolean
    setOpen: (arg0: boolean) => void
}

export interface IOption {
    value: string | number
    label: string |number
}

export type SelectOptionType = MultiValue<IOption> | SingleValue<IOption> | null