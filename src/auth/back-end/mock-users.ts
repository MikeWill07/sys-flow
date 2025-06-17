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

export const mockBalances = [
  {
    id: "1",
    tipo: "Manutenção",
    data: "24/04/2025",
    valor: "1000.0",
    hora: "12h00",
    saldoAtual: "3000",
  },
  {
    id: "1",
    tipo: "Compra",
    data: "30/04/2025",
    valor: "2000.0",
    hora: "18h00",
    saldoAtual: "3000",
  },
  {
    id: "1",
    tipo: "Pagamento",
    data: "27/08/2025",
    valor: "1000.0",
    hora: "21h00",
    saldoAtual: "3000",
  },
];
