import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import google from "../../assets/images/google.svg";
import { redirect, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    console.log("first");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User:", result.user);
      navigate("/home");
      // alert("Login Successful!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-[530px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-6 sm:p-8 text-center shadow-lg rounded-2xl">
        <CardContent className="flex flex-col items-center">
          <h1 className="!text-2xl  sm:!text-3xl md:!text-4xl font-bold text-[#08325D] mb-4 sm:mb-6">
            Budget Tracker
          </h1>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3580/3580371.png"
            alt="Budget illustration"
            className="w-32 h-32 mb-6 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-5 sm:mb-6"
          />

          <Button
            variant="outline"
            className="w-full sm:w-[280px] md:w-[320px] flex items-center justify-center gap-5 border rounded-xl py-3 sm:py-4 md:py-5 text-gray-700 font-medium"
            // onClick={() => navigate("/home")}
            onClick={handleGoogleLogin}
          >
            <img
              src={google}
              alt="Google logo"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
