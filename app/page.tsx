import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TodoMaster - Manage Your Tasks Efficiently",
  description: "Organize, prioritize, and accomplish your tasks with TodoMaster",
  openGraph: {
    title: "TodoMaster - Manage Your Tasks Efficiently",
    description: "Organize, prioritize, and accomplish your tasks with TodoMaster",
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">TodoMaster</h1>
          <div>
            <Button variant="outline" className="mr-2">
              <Link href="/login">Login</Link>
            </Button>
            <Button>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-20 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Manage Your Tasks with Ease
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Stay organized, boost productivity, and achieve your goals with TodoMaster.
        </p>
        <Link href="/task">
          <Button size="lg" className="mb-12">
            Get Started <ArrowRight className="" />
          </Button>
        </Link>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            title="Easy Organization"
            description="Categorize and prioritize your tasks effortlessly."
          />
          <FeatureCard
            title="Collaborate"
            description="Share lists and collaborate with team members."
          />
          <FeatureCard
            title="Cross-Platform"
            description="Access your todos from any device, anywhere."
          />
        </div>
      </main>

      <footer className="container mx-auto mt-20 py-6 text-center text-gray-500">
        © 2024 TodoMaster. All rights reserved.
      </footer>
    </div>
  )
}
