import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { login } from "../../services/apiServices/Auth";
import { validateEmail } from "../../utils";
import FormProps from "./types";

const LoginForm: React.FC<FormProps> = ({ redirect }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
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

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      await login({ email, password });
      toast.success('Login realizado com sucesso!');
      navigate('/');
    } catch {
      toast.error('Erro ao autenticar usuário.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-5 bg-white p-8 min-w-[400px] text-black rounded-xl">
      <div className="flex justify-center">
        <h1 className="font-black text-[32px]">
          Login
        </h1>
      </div>
      <div className="flex flex-col gap-5" role="form">
        <CustomInput
          label="Email"
          type="email"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <CustomInput
          label="Senha"
          type="password"
          aria-label="Senha"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <CustomButton
          onClick={handleLogin}
          disabled={loading}
          aria-label="Entrar"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </CustomButton>
          <p className="text-center cursor-pointer" onClick={redirect}>
            <a>
              Clique aqui para criar uma conta
            </a>
          </p>
      </div>
    </main>
  );
};

export default LoginForm;
