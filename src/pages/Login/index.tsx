import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import google from "../../assets/images/google.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div>
        <Card className="w-[530px] p-8 text-center shadow-lg rounded-2xl">
          <CardContent className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Budget Tracker
            </h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3580/3580371.png"
              alt="Budget illustration"
              className="w-32 h-32 mb-6"
            />

            <Button
              variant="outline"
              className="w-[300px] flex items-center justify-center gap-5 border rounded-xl py-5 text-gray-700 font-medium"
              onClick={() => navigate("/home")}
            >
              <img src={google} alt="Budget illustration" className="w-8 h-8" />
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
