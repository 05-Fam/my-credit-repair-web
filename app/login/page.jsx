import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="p-6 max-w-md mx-auto grid gap-4">
      <h1 className="text-3xl font-bold">Login / Konekte</h1>
      <Input placeholder="Email ou" type="email" />
      <Input placeholder="Modpas ou" type="password" />
      <Button>Konekte</Button>
    </main>
  );
}
