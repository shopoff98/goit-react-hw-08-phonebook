import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/contacts/auth/auth-operations";

import Button from "@mui/material/Button";

export default function UserMenu() {
  const email = useSelector((state) => state.auth.user.email);
  const isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p
        style={{
          marginLeft: 50,
          fontWeight: "500",
          color: "rgba(0, 0, 0, 0.87)",
          fontSize: 20,
          marginRight: 20,
        }}
      >
        {email}
      </p>
      <Button
        variant="outlined"
        sx={{ my: 1, mx: 1.5 }}
        // style={{ height: 20 }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </Button>
    </div>
  );
}
