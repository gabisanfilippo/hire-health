import { IconLogo } from "@/assets/icons";
import { IconProfile } from "@/assets/icons/IconProfile";

export const HeaderApp = () => {
  return (
    <header className="h-20 max-w-screen-lg m-auto p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <IconLogo />
        <h1 className="text-xl font-bold w-max text-custom-blue">
          Hire Health
        </h1>
      </div>
      <IconProfile />
    </header>
  );
};
