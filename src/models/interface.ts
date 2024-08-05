export interface I_CardTeam {
  teamName: string;
  removeTeam: (team: string) => void;
  renameTeam: (team: string, newName: string) => void;
}

export interface I_Player {
  player_id: string;
  player_name: string;
  player_image: string;
  team_name: string;
}
