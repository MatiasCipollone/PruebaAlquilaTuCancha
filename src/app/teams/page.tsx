"use client";
import { useState } from "react";
import { CardTeam } from "@/components";
import { I_Team, I_Player } from "@/models";

const CreateTeams = () => {
  const [teams, setTeams] = useState<I_Team[]>([]);
  const [teamName, setTeamName] = useState("");

  const addTeam = () => {
    if (teams.length >= 2) {
      alert("No puedes crear más de dos equipos.");
      return;
    }
    if (!teamName) {
      alert("El nombre del equipo no puede estar vacío.");
      return;
    }
    if (teams.some((t) => t.team_name === teamName)) {
      alert("El nombre del equipo ya existe.");
      return;
    }
    setTeams([...teams, { team_name: teamName, team_players: [] }]);
    setTeamName("");
  };

  const removeTeam = (teamName: string) => {
    setTeams(teams.filter((t) => t.team_name !== teamName));
  };

  const renameTeam = (oldName: string, newName: string) => {
    if (teams.some((t) => t.team_name === newName)) {
      alert("El nombre del equipo ya está en uso. Por favor elige otro.");
      return;
    }
    setTeams(
      teams.map((t) =>
        t.team_name === oldName ? { ...t, team_name: newName } : t
      )
    );
  };

  const addPlayerToTeam = (teamName: string, player: I_Player) => {
    setTeams(
      teams.map((t) =>
        t.team_name === teamName
          ? { ...t, team_players: [...t.team_players, player] }
          : t
      )
    );
  };

  const removePlayerFromTeam = (teamName: string, playerId: string) => {
    setTeams(
      teams.map((t) =>
        t.team_name === teamName
          ? {
              ...t,
              team_players: t.team_players.filter(
                (p) => p.player_id !== playerId
              ),
            }
          : t
      )
    );
  };

  const areTeamsReady =
    teams.length === 2 && teams.every((t) => t.team_players.length === 5);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Crear Equipos</h1>
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Nombre del equipo"
        className="border p-2 mb-4 w-full rounded-md font-bold"
      />
      <button
        onClick={addTeam}
        className="px-4 py-2 bg-green-500 text-white rounded-md"
      >
        Añadir Equipo
      </button>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Equipos Creados:</h2>
        <div className="flex row-span-1 flex-wrap justify-around">
          {teams.map((team, index) => (
            <CardTeam
              key={index}
              team={team}
              removeTeam={removeTeam}
              renameTeam={renameTeam}
              addPlayerToTeam={addPlayerToTeam}
              removePlayerFromTeam={removePlayerFromTeam}
              allTeamsPlayers={teams.flatMap((t) => t.team_players)}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        {areTeamsReady && (
          <div className="bg-green-500 text-white p-4 rounded-md">
            <p className="text-lg font-bold">¡Felicidades!</p>
            <p>Has completado la inscripción de los equipos.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTeams;
