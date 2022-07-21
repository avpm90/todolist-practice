import { useState } from "react";
import { api } from "../../api/api";
import { Toaster, toast } from "react-hot-toast";

export function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPass: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefaullt();
    try {
      if (
        form.email !== form.confirmEmail ||
        form.password !== form.confirmPass
      ) {
        toast.error("Email ou senha não correspondem a confirmação");
        return;
      }
      const response = await api.post("/user/sign-up", form);
      toast.success("Cadastrado com sucesso!");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label>Confirmação do Email</label>
        <input
          type="email"
          name="confirmEmail"
          value={form.confirmEmail}
          onChange={handleChange}
        />
        <label>Senha</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <label>Confirmação da Senha</label>
        <input
          type="password"
          name="confirmPass"
          value={form.confirmPass}
          onChange={handleChange}
        />
        <button type="Submit">Cadastrar</button>
      </form>
    </>
  );
}
