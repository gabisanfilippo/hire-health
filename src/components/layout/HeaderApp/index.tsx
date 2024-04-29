import { IconLogo } from "@/assets/icons";
import { IconProfile } from "@/assets/icons/IconProfile";

export const HeaderApp = () => {
  return (
    <header className="h-20 max-w-screen-xl m-auto py-4 px-8 flex items-center justify-between gap-4 sticky top-0 backdrop-blur z-30">
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
