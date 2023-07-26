import { CSSObjectWithLabel, GroupBase, OptionProps, StylesConfig } from "react-select";
import { IOption } from "@/types/comman";

export const controlStyles = (
    defaultStyles: CSSObjectWithLabel,
    theme: string
) => ({
    ...defaultStyles,
    boxShadow: '0 4px 20px rgb(0 0 0/ 7%)',
    borderRadius: '4px',
    height: 'auto',
    overflow: 'hidden',
    backgroundColor: theme === 'dark' ? '#2d2d2d' : '#f2f2f2',
    width: 'calc(100% + 40px)',
    minHeight: 30,
})

export const menuStyles = (
    defaultStyles: CSSObjectWithLabel,
    theme: string
) => ({
    ...defaultStyles,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '1px solid #9e9e9e',
    height: '40px',
    boxShadow: 'none',
    borderRadius: '4px',
    '&hover': {
        borderColor: '#9e9e9e',
    },
    '& .css-1dimb5e-singleValue': {
        color: theme === 'dark' ? '#f2f2f2' : '#222222',
    },
    borderRight: 'none',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
})

export const optionStyles = (
    defaultStyles: CSSObjectWithLabel,
    state: OptionProps<IOption, boolean, GroupBase<IOption>>,
    theme: string
) => ({
    ...defaultStyles,
    cursor: 'pointer',
})


export const inputStyles: StylesConfig<
  IOption,
  boolean,
  GroupBase<IOption>
> = {
    indicatorSeparator: () => ({
        border: 'none',
    }),
    dropdownIndicator: () => ({
        display: 'none',
    }),
    menuList: () => ({}),
    placeholder: (defaultStyles) => ({
        ...defaultStyles,
        color: '#b9babb'
    }),
};
