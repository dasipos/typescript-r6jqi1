export type TaskType = {
  id: number;
  name: string;
  complete: boolean;
  subtasks?: TaskType[];
}
