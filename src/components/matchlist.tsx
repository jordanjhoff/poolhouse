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
            {[...Array(pageCount)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(index)}
                  isActive={index === page}
                >
                  {index + 1}
                </PaginationLink>
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