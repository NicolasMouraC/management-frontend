import { useState } from "react";
import toast from "react-hot-toast";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { register } from "../../services/apiServices/Auth";
import { validateEmail } from "../../utils";
import FormProps from "./types";

const SignUpForm: React.FC<FormProps> = ({ redirect }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!name.trim()) {
      toast.error("O nome é obrigatório.");
      return false;
    }
    if (!validateEmail(email)) {
      toast.error("Por favor, insira um e-mail válido.");
      return false;
    }
    if (password.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      await register({ name, email, password });
      toast.success('Usuário registrado com sucesso!');
      redirect();
    } catch {
      toast.error('Erro ao registrar usuário.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-5 bg-white p-8 min-w-[400px] text-black rounded-xl">
      <div className="flex justify-center">
        <h1 className="font-black text-[32px]">Cadastrar</h1>
      </div>
      <CustomInput
        label="Nome"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <CustomInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <CustomInput
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <CustomButton onClick={handleRegister} disabled={loading}>
        {loading ? 'Cadastrando...' : 'Criar Conta'}
      </CustomButton>
      <p className="text-center cursor-pointer" onClick={redirect}>
        Cancelar
      </p>
    </main>
  );
};

export default SignUpForm;
