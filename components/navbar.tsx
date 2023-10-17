import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export const NavigationBar = () => {
  return (
    <nav>
      <div className="p-5 flex items-center justify-between font-semibold bg-light dark:bg-dark shadow-lg">
        <h1 className="text-lg">Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
