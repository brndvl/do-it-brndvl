import { InputContainer, Container } from "./styles";

export const Input = ({
  label,
  icon: Icon,
  register,
  name,
  errors,
  ...rest
}) => {
  return (
    <Container isErrored={!!errors}>
      <div>
        {label} {!!errors && <span> - {errors}</span>}
      </div>

      <InputContainer>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
