import RegisterForm from "@/components/auth/RegisterForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register | TodoMaster",
  description: "Create your TodoMaster account and start organizing your tasks",
}

export default function RegisterPage() {
  return (
    <div className="container max-w-md mx-auto pt-10 md:pt-20">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Enter your details to sign up for TodoMaster
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  )
}