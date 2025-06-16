import { mockUsers } from "../mock-users";

export function getUser(userId: string) {
  return mockUsers.find((user) => user.id === userId);
}
