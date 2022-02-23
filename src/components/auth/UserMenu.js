import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/contacts/auth/auth-operations";
export default function UserMenu() {
  const email = useSelector((state) => state.auth.user.email);
  const isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex" }}>
      <p style={{ marginTop: 0, marginLeft: 10 }}>{email}</p>
      <button
        style={{ height: 20 }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </div>
  );
}
