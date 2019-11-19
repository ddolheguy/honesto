export interface Employee {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly avatarUrl: string;
  readonly inTeam: boolean;
  readonly isNew: boolean;
  readonly completed: boolean;
}
