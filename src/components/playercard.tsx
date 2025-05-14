import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PlayerCardProps = {
  name: string;
  rating: number;
  wins: number;
  losses: number;
};

export function PlayerCard({ name, rating, wins, losses }: PlayerCardProps) {
  return (
    <Card className="shadow-lg max-w-sm mx-auto border">
      <CardContent>
        <CardTitle className="text-xl font-semibold text-center">{name}</CardTitle>
        <div className="mt-4 text-center">
          <p className="text-lg">
            Rating: <span className="font-medium text-blue-600">{rating}</span>
          </p>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-center">
            <p className="text-sm">Wins</p>
            <Badge className="mt-1 px-3 py-1 bg-green-500">{wins}</Badge>
          </div>
          <div className="text-center">
            <p className="text-sm">Losses</p>
            <Badge className="mt-1 px-3 py-1 bg-red-500">{losses}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}