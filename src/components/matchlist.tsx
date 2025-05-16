import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";

type MatchLineProp = {
  player1str: string;
  player2str: string;
  winnerstr: string;
  date: string;
};

type MatchLineArray = {
  matches: MatchLineProp[];
};

const ROWS_PER_PAGE = 10;

function getPaginationRange(current: number, total: number, delta = 1) {
  const range: (number | string)[] = [];
  const left = Math.max(1, current - delta);
  const right = Math.min(total, current + delta + 1);

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= left && i < right)) {
      range.push(i);
    } else if (range[range.length - 1] !== '...') {
      range.push('...');
    }
  }

  return range;
}

export function MatchList({ matches }: MatchLineArray) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(matches.length / ROWS_PER_PAGE);

  const paginated = matches.slice(
    page * ROWS_PER_PAGE,
    (page + 1) * ROWS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < pageCount) {
      setPage(newPage);
    }
  };

  return (
    <Card className="p-2 shadow-lg">
      <CardContent className="p-2">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200">
              <TableHead className="text-left font-bold">Players</TableHead>
              <TableHead className="text-left font-bold">Winner</TableHead>
              <TableHead className="text-left font-bold">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.map((match, i) => (
              <TableRow key={i} className="border-b border-gray-200">
                <TableCell className="py-2 px-4">{match.player1str}<br /> {match.player2str}</TableCell>
                <TableCell className="py-2 px-4">{match.winnerstr}</TableCell>
                <TableCell className="py-2 px-4">{match.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(page - 1)}/>
            </PaginationItem>
              {getPaginationRange(page + 1, pageCount).map((p, idx) => (
              <PaginationItem key={idx}>
                {p === '...' ? (
                  <span className="px-2 text-muted-foreground">...</span>
                ) : (
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange((p as number) - 1)}
                    isActive={(p as number) === page + 1}
                  >
                    {p}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(page + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
}