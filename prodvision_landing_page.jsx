import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gray-100">
        <Image src="/logo.png" alt="ProdVision Logo" width={160} height={160} />
        <h1 className="text-4xl font-bold mt-6">AI-Powered Insights from Your Existing Cameras</h1>
        <p className="mt-4 max-w-xl text-lg">
          ProdVision transforms your facility’s existing security footage into real-time operational and safety insights — no new hardware required.
        </p>
        <Button className="mt-6 text-lg px-6 py-3">Request Free Demo</Button>
      </section>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Why ProdVision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">No New Hardware</h3>
            <p>
              Leverage your existing camera infrastructure to start gaining insights without costly upgrades or installations.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Real-Time Visibility</h3>
            <p>
              Detect inefficiencies, monitor safety, and track production activity instantly from anywhere.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Built for Small Manufacturers</h3>
            <p>
              Affordable and scalable AI designed specifically for small and mid-sized industrial facilities.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} ProdVision. All rights reserved.
      </footer>
    </main>
  );
}
