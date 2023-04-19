import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Prop {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Prop) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement
          onClick={() => {
            ref.current?.focus();
          }}
        >
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games"
          variant={"filler"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
