//got lazy and decided to use claude. thank you claude for this component
import React, { useMemo, useState } from "react";
import { format, subDays, subYears, differenceInDays } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Match type based on your Prisma schema
type Match = {
  id: string;
  player1Id: string;
  player2Id: string;
  winnerId: string;
  createdAt: Date | string;
  player1RatingBefore: number;
  player2RatingBefore: number;
  player1RatingAfter: number;
  player2RatingAfter: number;
  player1RdBefore: number;
  player2RdBefore: number;
  player1RdAfter: number;
  player2RdAfter: number;
  undoable: boolean;
};

type TimeRange = "7d" | "30d" | "1y";

type DayData = {
  date: string; 
  fullDate: string;
  rating: number;  
  hasActivity: boolean; 
  ratingChange: number; 
  day: number;    
};

type RatingHistoryChartProps = {
  matches: Match[];
  userId: string;
  className?: string;
  title?: string;
  description?: string;
};

export default function RatingHistoryChart({
  matches,
  userId,
  className = "",
  title = "Rating History",
  description = "",
}: RatingHistoryChartProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>("30d");

  const chartData = useMemo(() => {
    // Filter matches for the user
    const userMatches = matches.filter(
      (match) => match.player1Id === userId || match.player2Id === userId
    );

    // Sort matches by date
    const sortedMatches = [...userMatches].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    if (sortedMatches.length === 0) {
      return [];
    }

    // Determine date range based on selection
    const now = new Date();
    let startDate: Date;
    
    switch (timeRange) {
      case "7d":
        startDate = subDays(now, 7);
        break;
      case "30d":
        startDate = subDays(now, 30);
        break;
      case "1y":
      default:
        startDate = subYears(now, 1);
        break;
    }

    // Find the earliest match
    const firstMatchDate = new Date(sortedMatches[0].createdAt);
    
    // If the earliest match is after our start date, use that instead
    if (firstMatchDate > startDate) {
      startDate = firstMatchDate;
    }

    // Get the initial rating from the first match
    const firstMatch = sortedMatches[0];
    const isFirstPlayer1 = firstMatch.player1Id === userId;
    let lastKnownRating = Math.round(isFirstPlayer1
      ? firstMatch.player1RatingBefore
      : firstMatch.player2RatingBefore);

    // Group matches by day
    const matchesByDay = sortedMatches.reduce((acc, match) => {
      const matchDate = new Date(match.createdAt);
      const dateStr = format(matchDate, "yyyy-MM-dd");
      
      if (!acc[dateStr]) {
        acc[dateStr] = [];
      }
      
      acc[dateStr].push(match);
      return acc;
    }, {} as Record<string, Match[]>);

    const totalDays = differenceInDays(now, startDate) + 1;
    const result: DayData[] = [];

    let prevDayRating = lastKnownRating;
    
    // Create data points for each day
    for (let i = 0; i < totalDays; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const dateStr = format(currentDate, "yyyy-MM-dd");
      const displayDate = format(currentDate, "MMM d");
      const fullDate = format(currentDate, "MMM d, yyyy");
      
      const dayMatches = matchesByDay[dateStr] || [];
      const hasActivity = dayMatches.length > 0;
      

      let endRating = prevDayRating;
      let ratingChange = 0;
      
      if (hasActivity) {
        dayMatches.sort((a, b) => 
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        
        const firstDayMatch = dayMatches[0];
        const lastDayMatch = dayMatches[dayMatches.length - 1];
        
        const isFirstDayMatchPlayer1 = firstDayMatch.player1Id === userId;
        const isLastDayMatchPlayer1 = lastDayMatch.player1Id === userId;
        
        const startRating = Math.round(isFirstDayMatchPlayer1
          ? firstDayMatch.player1RatingBefore
          : firstDayMatch.player2RatingBefore);
          
        endRating = Math.round(isLastDayMatchPlayer1
          ? lastDayMatch.player1RatingAfter
          : lastDayMatch.player2RatingAfter);
          
        ratingChange = endRating - startRating;
      }
      
      result.push({
        date: displayDate,
        fullDate: fullDate,
        rating: endRating,
        hasActivity: hasActivity,
        ratingChange: ratingChange,
        day: i, 
      });
      
      prevDayRating = endRating;
    }

    return result;
  }, [matches, userId, timeRange]);

  // Calculate appropriate x-axis ticks based on time range
  const xAxisTicks = useMemo(() => {
    if (chartData.length === 0) return [];
    
    const numberOfTicks = timeRange === "7d" ? 7 : timeRange === "30d" ? 6 : 12;
    const step = Math.max(1, Math.floor(chartData.length / numberOfTicks));
    
    const ticks: number[] = [];
    for (let i = 0; i < chartData.length; i += step) {
      ticks.push(i);
    }
    
    if (ticks[ticks.length - 1] !== chartData.length - 1) {
      ticks.push(chartData.length - 1);
    }
    
    return ticks;
  }, [chartData, timeRange]);

  // Custom tooltip that only shows on days with activity
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as DayData;
      
      if (data.hasActivity) {
        const changeColor = data.ratingChange > 0 
          ? "text-green-500" 
          : data.ratingChange < 0 
            ? "text-red-500" 
            : "text-gray-500";

        return (
          <div className="rounded-lg border bg-background p-2 shadow-md">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">{data.fullDate}</p>
              <p className="text-[hsl(var(--chart-1))]">Rating: {data.rating}</p>
              <p className={changeColor}>
                {data.ratingChange > 0 ? "+" : ""}{data.ratingChange} points
              </p>
            </div>
          </div>
        );
      }
    }
    
    return null;
  };

  const minRating = useMemo(() => {
    if (chartData.length === 0) return 0;
    const min = Math.min(...chartData.map(d => d.rating));
    return Math.max(0, min - 100); 
  }, [chartData]);

  return (
    <Card className="p-2 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between p-2">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Select
          value={timeRange}
          onValueChange={(value) => setTimeRange(value as TimeRange)}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">7 Days</SelectItem>
            <SelectItem value="30d">30 Days</SelectItem>
            <SelectItem value="1y">1 Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-2">
        <div className="h-[280px] w-full">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
              >
                <defs>
                <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.1} />
                </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="day"
                  ticks={xAxisTicks}
                  tickFormatter={(value) => {
                    const day = chartData[value];
                    return day ? day.date : '';
                  }}
                  tickLine={false}
                  axisLine={false}
                  padding={{ left: 10, right: 10 }}
                  className="text-xs fill-muted-foreground"
                />
                <YAxis
                  tickFormatter={(value) => Math.round(value).toString()}
                  tickLine={false}
                  axisLine={false}
                  padding={{ top: 10, bottom: 10 }}
                  domain={[minRating, 'dataMax + 50']}
                  className="text-xs fill-muted-foreground"
                  dx={5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="rating"
                  stroke="hsl(var(--chart-1))"
                  fillOpacity={1}
                  fill="url(#colorRating)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex justify-center items-center h-full text-muted-foreground">
              No match data available for this time period
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}