import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/xumbreks.png"
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <div className="truncate flex flex-col">
        <span className="text-sm font-semibold text-zinc-500">
          Brian Rangel
        </span>
        <span className="truncate text-sm text-zinc-500">
          brianrangel10@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  );
}
