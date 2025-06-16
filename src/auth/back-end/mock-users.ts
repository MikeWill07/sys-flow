import sha512 from "crypto-js/sha512";

export const mockUsers = [
  {
    id: "1",
    email: "mikewillbento@gmail.com",
    passwordHash: sha512("Teste1234!@#").toString(),
    isAuthenticated: true,
    accessToken: "12345",
  },
];

export const mockBuildings = [
  {
    id: "1",
    foto: "FotoPredio1",
    nome: "Baymetrics",
  },
  {
    id: "2",
    foto: "FotoPredio2",
    nome: "The members",
  },
  {
    id: "3",
    foto: "FotoPredio3",
    nome: "Empire State",
  },
];
