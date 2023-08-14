import { useStore } from "effector-react";
import { useState } from "react";
import Select from "react-select";
import { SelectOptionType } from "@/types/comman";
import { createSelectOption } from "@/utils/common";
import { $mode } from "@/context/mode";
import {
  controlStyles,
  menuStyles,
  selectStyles,
} from "@/styles/catalog/select";
import { optionStyles } from "@/styles/searchInput/searchInput";
import { categoryOptions } from "@/utils/selectContents";

const FilterSelect = () => {
  const mode = useStore($mode);
  const [categoryOption, setCategoryOption] = useState<SelectOptionType>(null);

  const handleSearchOptionChange = (selectedOption: SelectOptionType) => {
    setCategoryOption(selectedOption);
  };

  return (
    <Select
      placeholder="Я ищу ..."
      value={categoryOption || createSelectOption("Сначала дешевые")}
      onChange={handleSearchOptionChange}
      styles={{
        ...selectStyles,
        control: (defaultStyles) => ({
          ...controlStyles(defaultStyles, mode),
        }),
        input: (defaultStyles) => ({
          ...defaultStyles,
          color: mode === "dark" ? "#f2f2f2" : "#222222",
        }),
        menu: (defaultStyles) => ({
          ...menuStyles(defaultStyles, mode),
        }),
        option: (defaultStyles, state) => ({
          ...optionStyles(defaultStyles, state, mode),
        }),
      }}
      isSearchable={false}
      options={categoryOptions}
    />
  );
};

export default FilterSelect;
