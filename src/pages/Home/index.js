import { useHistory } from "react-router";
import {Button} from "../../components/Button"
import { Container, Content } from "./styles";

export const Home = () => {

    const history = useHistory()

    const handleNavigation = (path) => history.push(path)

  return (
    <Container>
      <Content>
        <h1>Do<span>.</span>it</h1>
        <span>Organize-se de forma fácil de efetiva</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema={true}>Cadastre-se</Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};
