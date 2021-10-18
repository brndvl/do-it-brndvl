import { AnimationContainer, Background, Container, Content } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Signup = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas estão diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = ({ name, email, password }) => {
    const user = { name, email, password };
    api
      .post("/user/register", user)
      .then((response) => console.log(response.data, "deu certo"))
      .catch((err) => console.log(err, "deu errado"));
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastros</h1>
            <Input
              register={register}
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              name="name"
              errors={errors.name?.message}
            />
            <Input
              register={register}
              icon={FiMail}
              label="E-mail"
              placeholder="Seu melhor e-mail"
              name="email"
              errors={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem forte"
              name="password"
              type="password"
              errors={errors.password?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Senha"
              placeholder="Confirmação de senha"
              name="passwordConfirm"
              type="password"
              errors={errors.passwordConfirm?.message}
            />
            <button type="submit">Enviar</button>
            <p>
              Já tem um conta? Faça seu <Link to="/link">login.</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
