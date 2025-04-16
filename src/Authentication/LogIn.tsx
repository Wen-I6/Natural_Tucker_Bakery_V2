import { useNavigate } from "react-router-dom";
import LayoutContainer from "../components/LayoutContainer";

type LoginProps = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

const Login: React.FC<LoginProps> = () => {
  const go = useNavigate();
  return (
    <>
      <LayoutContainer>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Log In</h1>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Email"
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Log In
            </button>
            <div className="flex items-center mt-4">
              <p>Don't have an account yet?</p>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => go("/signup")}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </LayoutContainer>
    </>
  );
};

export default Login;
