"use client";
import { useState } from "react";
import { CardTeam } from "@/components";

const CreateTeams = () => {
  const [teams, setTeams] = useState<string[]>([]);
  const [teamName, setTeamName] = useState("");

  const addTeam = () => {
    if (teams.length >= 2) {
      alert("No puedes crear más de dos equipos.");
      return;
    }
    if (teamName && !teams.includes(teamName)) {
      setTeams([...teams, teamName]);
      setTeamName("");
    } else {
      alert("El nombre del equipo no puede estar vacío o duplicado.");
    }
  };

  const removeTeam = (team: string) => {
    setTeams(teams.filter((t) => t !== team));
  };

  const renameTeam = (team: string, newName: string) => {
    setTeams(teams.map((t) => (t === team ? newName : t)));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Crear Equipos</h1>
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Nombre del equipo"
        className="border p-2 mb-4 w-full rounded-md"
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
              teamName={team}
              removeTeam={removeTeam}
              renameTeam={renameTeam}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateTeams;
