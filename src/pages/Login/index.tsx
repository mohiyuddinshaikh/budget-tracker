
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import google from "../../assets/images/google.svg"

export default function Login() {

  return (
   <div className="w-[1920px] min-h-screen flex items-center justify-center bg-white">
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
            >
               <img
              src= {google}
              alt="Budget illustration"
              className="w-8 h-8"
            />
              Sign in with Google
            </Button>
          </CardContent>
          {/* <BottomSheet 
            title="Login with Google"
            triggerText="Open Login Sheet"
          >
          <div className="flex flex-col gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <span>Continue with Google</span>
          </Button>
          <Button variant="ghost">Cancel</Button>
        </div>
          </BottomSheet> */}
          </Card>
          </div>
          </div>
  );
}
