import {
  HStack,
  Switch,
  Text,
  useColorMode,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <FormControl>
        <HStack>
          <Switch
            id="darkmode"
            colorScheme="green"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
          <FormLabel htmlFor="darkmode">
            <Text whiteSpace="nowrap">Dark Mode</Text>
          </FormLabel>
        </HStack>
      </FormControl>
    </HStack>
  );
};

export default ColorModeSwitch;
