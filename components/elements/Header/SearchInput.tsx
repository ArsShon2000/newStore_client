import { useStore } from "effector-react";
import Select from "react-select";
import React, { useState } from "react";
import { $mode } from "@/context/mode";
import styles from "@/styles/header/index.module.scss";
import { SelectOptionType } from "@/types/comman";
import { controlStyles, inputStyles, menuStyles, optionStyles } from "@/styles/searchInput/searchInput";

const SearchInput = () => {
  const mode = useStore($mode);
  const [searchOption, setSearchOption] = useState<SelectOptionType>(null);

  const handleSearchOpionChange = (selectedOption: SelectOptionType) => {
    setSearchOption(selectedOption);
  };

  return (
    <Select
      placeholder="Я ищу ..."
      value={searchOption}
      onChange={handleSearchOpionChange}
      styles={{
        ...inputStyles,
        control: (defaultStyles) => ({
            ...controlStyles(defaultStyles, mode),
        }),
        input: (defaultStyles) => ({
            ...defaultStyles, 
            color: mode === 'dark' ? '#f2f2f2' : '#222222',
        }),
        menu: (defaultStyles) => ({
            ...menuStyles(defaultStyles, mode),
        }),
        option: (defaultStyles, state) => ({
            ...optionStyles(defaultStyles, state, mode),
        }),
      }}
      options={[1,3,4,5,6,7].map((item) => ({ value: item, label: item }))}
    />
  );
};

export default SearchInput;
