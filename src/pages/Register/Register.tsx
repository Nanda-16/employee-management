import { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import CardHeader from "@mui/material/CardHeader";
import {
  Button,
  CardActions,
  Grid,
  InputLabel,
  TextField,
  Typography,
  createStyles,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles: any = createStyles({
  formControlLabel: { fontSize: "0.8rem", "& label": { fontSize: "0.8rem" } },
});

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("* Passwords do not match");
      return;
    }

    if (name && email && password && confirmPassword) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
      navigate("/dashboard/home");
    }
  };
  const nameRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    nameRef.current?.focus();
  }, []);
  return (
    <>
      <div className="row justify-content-center mt-5">
        <Card sx={{ maxWidth: 700, padding: "0" }} variant="outlined">
          <CardHeader
            title="Login"
            disableTypography={true}
            sx={{ bgcolor: "#00000008", borderBottom: "1px solid #0000001f" }}
          />
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Grid container spacing={3} sx={{ padding: "1em" }}>
                <Grid item xs={12} sm={3}>
                  <InputLabel sx={{ marginTop: "0.8em", fontSize: "0.8em" }}>
                    Name
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    inputRef={nameRef}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    InputLabelProps={{
                      style: { color: "#0000004f", fontSize: "0.8em" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputLabel sx={{ marginTop: "0.8em", fontSize: "0.8em" }}>
                    E-mail
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="E-mail"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    InputLabelProps={{
                      style: { color: "#0000004f", fontSize: "0.8em" },
                    }}
                    variant="outlined"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputLabel sx={{ marginTop: "0.8em", fontSize: "0.8em" }}>
                    Password
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    InputLabelProps={{
                      style: { color: "#0000004f", fontSize: "0.8em" },
                    }}
                    variant="outlined"
                    type="password"
                    inputProps={{ minLength: 8 }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={3}>
                  <InputLabel sx={{ marginTop: "0.8em", fontSize: "0.8em" }}>
                    Confirm Password
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    InputLabelProps={{
                      style: { color: "#0000004f", fontSize: "0.8em" },
                    }}
                    variant="outlined"
                    type="password"
                    inputProps={{ minLength: 8 }}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    helperText={errorMessage}
                    // FormHelperTextProps={{
                    //   classes={helperTextStyles.helperText,}
                    // }}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Container sx={{ textAlign: "center", marginBottom: "5px" }}>
                <Button
                  variant="contained"
                  type="submit"
                  style={{ textTransform: "none" }}
                >
                  Register
                </Button>
              </Container>
            </CardActions>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Register;
