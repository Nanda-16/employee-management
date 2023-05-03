import { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import CardHeader from "@mui/material/CardHeader";
import {
  Button,
  CardActions,
  Checkbox,
  FormControlLabel,
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(email, password, remember, "remember me");
    if (email && password) {
      setEmail("");
      setPassword("");
      setRemember(false);
      navigate("/dashboard/home");
    }
  };

  const emailRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    emailRef.current?.focus();
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
                    InputLabelProps={{
                      style: { color: "#0000004f", fontSize: "0.8em" },
                    }}
                    autoComplete="off"
                    variant="outlined"
                    type="email"
                    inputRef={emailRef}
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
                    InputLabelProps={{
                      style: { color: "#0000004f", fontSize: "0.8em" },
                    }}
                    autoComplete="off"
                    variant="outlined"
                    type="password"
                    inputProps={{ minLength: 8 }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Grid>{" "}
              </Grid>
              <div style={{}} className="text-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      onChange={(e) => setRemember(e.currentTarget.checked)}
                      checked={remember}
                    />
                  }
                  label={
                    <Typography style={styles.formControlLabel}>
                      Remember Me
                    </Typography>
                  }
                  sx={{ color: "#1976d2" }}
                />
              </div>
            </CardContent>
            <CardActions>
              <Container sx={{ textAlign: "center", marginBottom: "5px" }}>
                <Button
                  variant="contained"
                  type="submit"
                  style={{ textTransform: "none" }}
                >
                  Login
                </Button>
                <Button href="#" size="small" style={{ textTransform: "none" }}>
                  Forgot Password
                </Button>
              </Container>
            </CardActions>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Login;
