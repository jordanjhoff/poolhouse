"use client";

import { useState, useEffect } from "react";
import { MatchHistory } from "@/components/matchlist";
import { transformToMatchLine, transformUserToPlayerCard } from "@/utils/transformers";
import { PlayerCard } from "@/components/playercard";

const ROWS_PER_PAGE = 100;

type PlayerCardProps = {
  name: string;
  rating: number;
  wins: number;
  losses: number;
};

export default function TestPage() {
  const [matches, setMatches] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [user, setUser] = useState<PlayerCardProps>();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`/api/match/ledger?page=${page}&pageSize=${ROWS_PER_PAGE}`);
        const data = await response.json();

        if (data.matches) {
          const transformedMatches = data.matches.map(transformToMatchLine);
          setMatches(transformedMatches);
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };

    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/user/by-name?name=jordy`);
        const data = await response.json();
        if (data) {
          const transformedUser = transformUserToPlayerCard(data);
          setUser(transformedUser);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchMatches();
    fetchUser();
  }, [page]);

  return (
    <>
      {user && (
        <PlayerCard
          name={user.name}
          rating={user.rating}
          wins={user.wins}
          losses={user.losses}
        />
      )}
    </>
  );
}