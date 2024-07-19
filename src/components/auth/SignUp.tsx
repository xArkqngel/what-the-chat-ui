import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";

function SignUp() {
  const [createUser] = useCreateUser();

  return (
    <Auth
      submitLabel="Sign Up"
      onSubmit={async ({email, password}) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MUILink>Log In</MUILink>
      </Link>
    </Auth>
  );
}

export default SignUp;
