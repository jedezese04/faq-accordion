"use client";

import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const SwitchThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const handle = (checked: boolean) => {
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Switch
      onChange={(e) => handle(e.target.checked)}
      defaultSelected={theme === "dark"}
      color={"primary"}
      size="lg"
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <Moon color="#000" className="p-1" />
        ) : (
          <Sun color="#000" className="p-1" />
        )
      }
    >
      Dark Mode
    </Switch>
  );
};

export default SwitchThemeButton;
