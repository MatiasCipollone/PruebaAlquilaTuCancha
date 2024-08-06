"use client";
import { useState, useEffect } from "react";
import { I_CardTeam, I_Player } from "@/models";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchPlayers = async (playerName: string): Promise<I_Player[]> => {
  const response = await fetch(
    `https://apiv3.apifootball.com/?action=get_players&player_name=${playerName}&APIkey=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const CardTeam = ({
  team,
  removeTeam,
  renameTeam,
  addPlayerToTeam,
  removePlayerFromTeam,
  allTeamsPlayers,
}: I_CardTeam) => {
  const [players, setPlayers] = useState<I_Player[]>([]);
  const [teamPlayers, setTeamPlayers] = useState<I_Player[]>(team.team_players);
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (playerName) {
        fetchPlayers(playerName).then((data) => setPlayers(data));
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [playerName]);

  useEffect(() => {
    setTeamPlayers(team.team_players);
  }, [team.team_players]);

  const addPlayer = (player: I_Player) => {
    if (teamPlayers.length >= 5) {
      alert("No puedes añadir más de 5 jugadores.");
      return;
    }
    if (teamPlayers.some((p) => p.player_id === player.player_id)) {
      alert("Este jugador ya está en el equipo.");
      return;
    }
    if (allTeamsPlayers.some((p) => p.player_id === player.player_id)) {
      alert("Este jugador ya está en otro equipo.");
      return;
    }

    addPlayerToTeam(team.team_name, player);
    setPlayerName("");
    setPlayers([]);
  };

  const removePlayer = (playerId: string) => {
    removePlayerFromTeam(team.team_name, playerId);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md mb-4 w-96">
      <div className="flex justify-between items-center mb-4">
        <input
          className="text-2xl font-bold mb-2 p-2 mr-2 w-full rounded-sm"
          type="text"
          value={team.team_name}
          onChange={(e) => renameTeam(team.team_name, e.target.value)}
        />
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md mb-4"
          onClick={() => removeTeam(team.team_name)}
        >
          X
        </button>
      </div>
      <p className="text-sm mb-4">
        Jugadores: {teamPlayers.length}/5{" "}
        {teamPlayers.length < 5 ? "Incompleto" : "Completo"}
      </p>
      {teamPlayers.length < 5 && (
        <>
          <div className="mb-4">
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Nombre del jugador"
              className="border p-2 mr-2 w-full"
            />
          </div>

          {players.length > 0 && (
            <div>
              <p className="font-bold mb-2">Selecciona un jugador:</p>
              <ul className="list-disc ml-5">
                {players.map((player, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-slate-200 p-2 rounded-md mb-2"
                  >
                    <div className="flex items-center">
                      {player.player_name} - {player.team_name}
                    </div>
                    <button
                      onClick={() => addPlayer(player)}
                      className="text-green-500 ml-4"
                    >
                      Añadir
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {teamPlayers.length >= 5 && (
        <p className="text-green-500 font-bold mt-4">Equipo completo</p>
      )}

      <p className="font-bold mt-4">Jugadores en el equipo:</p>
      <ul className="list-disc ml-5 mt-2">
        {teamPlayers.map((player, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-slate-200 p-2 rounded-md mb-2"
          >
            {player.player_name}
            <button
              onClick={() => removePlayer(player.player_id)}
              className="text-red-500 ml-4"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
