import { getWakaStatus } from "@/lib/wakatime";
import { GoDotFill } from "react-icons/go";
import { RefreshHandler } from "./refresh-handler";
import { cn } from "@/lib/utils";
import { CodeXml, Coffee, Terminal } from "lucide-react";

export const revalidate = process.env.NODE_ENV === "development" ? 86400 : 300;

const WakaTime = async () => {
  const status = await getWakaStatus();

  const StatusCard = ({ isOnline, title, subtitle, icon: Icon }: any) => (
    <div className="group relative flex items-center gap-5 px-5 py-4 rounded-2xl bg-secondary/10 border border-border/40 hover:border-primary/40 hover:bg-secondary/20 transition-all duration-500 w-fit backdrop-blur-md shadow-sm">
      
      {/* Status Glow Indicator */}
      <div className="relative flex items-center justify-center shrink-0">
        <GoDotFill className={cn(
          "size-4 z-10 transition-colors duration-500",
          isOnline ? "text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" : "text-muted-foreground/40"
        )} />
        {isOnline && (
          <div className="absolute size-4 bg-emerald-500/30 rounded-full animate-ping" />
        )}
      </div>

      <div className="flex flex-col gap-1">
        {/* Top Header Row */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-muted-foreground/80">
            {isOnline ? "Live Session" : "Previous Session"}
          </span>
          <div className="h-px w-6 bg-border/60 hidden md:block" />
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-background/50 border border-border/40">
            <Terminal className="size-3 text-primary/60" />
            <span className="text-[11px] font-bold text-foreground/70">neovim</span>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex items-center gap-2.5">
          <Icon className={cn(
            "size-5 transition-transform duration-500 group-hover:scale-110",
            isOnline ? "text-primary" : "text-muted-foreground"
          )} />
          <p className="text-[15px] font-medium tracking-tight text-foreground/90">
            {title} <span className="font-bold text-primary tabular-nums">{subtitle}</span>
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
        title="Status" 
        subtitle="Offline" 
        icon={Coffee} 
      />
    );
  }

  return (
    <div className="w-fit">
      {status.isCoding ? (
        <StatusCard 
          isOnline={true} 
          title="Coding for" 
          subtitle={status.todayText} 
          icon={CodeXml} 
        />
      ) : (
        <StatusCard 
          isOnline={false} 
          title="Yesterday :" 
          subtitle={status.yesterdayText} 
          icon={Coffee} 
        />
      )}
    </div>
  );
};

export { WakaTime };