import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register, handleSubmit } = useForm();

  function handleSignUp() {
    // return console.log("teste");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Sign Up</h1>
        <label htmlFor="name">Nome</label>
        <input type="text" {...register("name")} />
        <br />
        <label htmlFor="lastname">Sobrenome</label>
        <input type="text" {...register("lastName")} />
        <br />
        <label htmlFor="profit">Lucro Mensal</label>
        <input type="text" {...register("profit")} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} />
        <br />
        <label htmlFor="password">Senha</label>
        <input type="password" {...register("password")} />
        <br />
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input type="password" {...register("confirmPassword")} />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
