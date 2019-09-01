export interface FbListItem {
  id: string;
  title: string;
  beschreibung?: string;
  datum: { von: Date; bis: Date };
  punkteGesamt: number;
}
