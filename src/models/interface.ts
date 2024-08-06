export interface I_CardTeam {
  team: I_Team;
  removeTeam: (team: string) => void;
  renameTeam: (team: string, newName: string) => void;
  addPlayerToTeam: (team: string, player: I_Player) => void;
  removePlayerFromTeam: (team: string, playerId: string) => void;
  allTeamsPlayers: I_Player[];
}
export interface I_Team {
  team_name: string;
  team_players: I_Player[];
}

export interface I_Player {
  player_id: string;
  player_name: string;
  player_image: string;
  team_name: string;
}
