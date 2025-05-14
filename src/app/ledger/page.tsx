"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/navbar";
import { MatchList } from "@/components/matchlist";
import { transformToMatchLine } from "@/utils/transformers";


type Match = {
  id: string;
  player1: { name: string };
  player2: { name: string };
  winner: { name: string };
  player1RatingBefore: number;
  player2RatingBefore: number;
  player1RatingAfter: number;
  player2RatingAfter: number;
  createdAt: string;
};

export default function MatchLedger() {
  const router = useRouter();
  const [transformedMatches, setMatches] = useState<[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(1000);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/match/ledger?page=${page}&pageSize=${pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.matches.map(transformToMatchLine));
        setTotalPages(data.totalPages);
      });
  }, [page, pageSize]);

  return (
    <>
      <NavBar />
      <main>
        <MatchList matches={transformedMatches} />
      </main>
    </>
  );
}