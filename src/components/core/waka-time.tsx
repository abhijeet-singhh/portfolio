import { getWakaStatus } from "@/lib/wakatime";
import { GoDotFill } from "react-icons/go";
import { RefreshHandler } from "./refresh-handler";

export const revalidate = 300;

const WakaTime = async () => {
  const status = await getWakaStatus();

  // Handle API failure/Offline edge case
  if (!status || !status.success) {
    return (
      <div className="flex flex-col gap-1 px-4 py-2 rounded-xl bg-card-custom border border-border w-fit">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-[13px] font-bold text-muted-custom tracking-wider">
            <GoDotFill className="size-4 mt-0.5" />
            <span>Offline</span>
            <span className="flex items-center gap-0.5 ml-1">
              <img
                src="/icons/neovim-logo.svg"
                alt="neovim"
                className="size-4"
              />
              <p>neovim</p>
            </span>
          </div>
          <div className="text-[13px] text-muted-custom font-semibold ml-1">
            Coding stats are unavailable right now.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-fit">
      {/* Invisible component that handles the auto-refresh logic */}
      <RefreshHandler interval={300000} />

      {status.isCoding ? (
        /* -- Online State -- */
        <div className="flex flex-col gap-1 px-4 py-2 rounded-xl bg-card-custom border border-border w-fit">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[13px] font-bold text-muted-custom dark:text-neutral-300 tracking-wider">
              <GoDotFill className="size-4 mt-0.5 animate-pulse text-green-500" />
              <span>Online</span>
              <span className="flex items-center gap-0.5 ml-1">
                <img
                  src="/icons/neovim-logo.svg"
                  alt="neovim"
                  className="size-4"
                />
                <p>neovim</p>
              </span>
            </div>
            <div className="flex items-center gap-1 text-[13px] text-muted-custom font-semibold ml-1">
              Today working for
              <span className="font-bold text-zinc-500 dark:text-neutral-300">
                {status.todayText}
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* -- Offline State -- */
        <div className="flex flex-col gap-1 px-4 py-2 rounded-xl bg-card-custom border border-border w-fit">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[13px] font-bold text-muted-custom tracking-wider">
              <GoDotFill className="size-4 mt-0.5" />
              <span>Offline</span>
              <span className="flex items-center gap-0.5 ml-1">
                <img
                  src="/icons/neovim-logo.svg"
                  alt="neovim"
                  className="size-4"
                />
                <p>neovim</p>
              </span>
            </div>
            <div className="text-[13px] text-muted-custom font-semibold ml-1">
              Yesterday worked for
              <span className="text-zinc-300">{status.yesterdayText}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { WakaTime };
