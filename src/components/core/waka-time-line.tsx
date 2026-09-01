import { getWakaStatus } from "@/lib/wakatime";
import { RefreshHandler } from "./refresh-handler";
import { cn } from "@/lib/utils";
import { Coffee, Monitor, Terminal } from "lucide-react";

export const revalidate = process.env.NODE_ENV === "development" ? 86400 : 300;

const WakaTime = async () => {
  const status = await getWakaStatus();

  const StatusCard = ({ isOnline, title, subtitle, icon: Icon }: any) => (
    <div className="group relative w-full sm:w-auto font-mono select-none">
      {/* Sharp Linear Offset Accent on Hover */}
      <div className="absolute inset-0 border border-[#bb6b00]/60 translate-x-1.5 translate-y-1.5 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none z-0" />

      {/* Main Structural Layout Block */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-background border border-border/80 rounded-none group-hover:border-foreground/40 transition-colors duration-150">
        {/* Left Side: Status Signifier & Icon Tracker */}

        <div className="flex items-center gap-3">
          {/* Square Status Box Indicator */}
          <div className="relative flex items-center justify-center shrink-0">
            <span className="relative flex h-2 w-2">
              {isOnline && (
                <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-500 opacity-75 rounded-none" />
              )}
              <span
                className={cn(
                  "relative inline-flex h-2 w-2 rounded-none",
                  isOnline ? "bg-emerald-500" : "bg-muted-foreground/40",
                )}
              />
            </span>
          </div>

          {/* Active Context Box Tag */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-none bg-secondary/30 border border-border/60">
            <Terminal className="size-3 text-foreground" />
            <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">
              NVIM
            </span>
          </div>
        </div>

        {/* Separator Pipe Line */}
        <div className="hidden sm:block h-4 w-px bg-border/40" />

        {/* Right Side: Primary Content Core */}
        <div className="flex items-center gap-2.5">
          <Icon className="size-3.5 text-muted-foreground shrink-0" />
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
            {title}{" "}
            <span className="text-foreground font-black tabular-nums">
              {subtitle.toUpperCase()}
            </span>
          </p>
        </div>
      </div>

      <RefreshHandler interval={300000} />
    </div>
  );

  if (!status || !status.success) {
    return (
      <StatusCard
        isOnline={false}
        title="STATUS //"
        subtitle="OFFLINE"
        icon={Coffee}
      />
    );
  }

  return (
    <div className="w-fit">
      {status.isCoding ? (
        <StatusCard
          isOnline={true}
          title="LOGGED //"
          subtitle={status.todayText}
          icon={Monitor}
        />
      ) : (
        <StatusCard
          isOnline={false}
          title="YESTERDAY //"
          subtitle={status.yesterdayText}
          icon={Coffee}
        />
      )}
    </div>
  );
};

export { WakaTime };
