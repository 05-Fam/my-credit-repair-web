import React from "react";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Plan & Pri | Credit Repair Services</title>
        <meta name="description" content="Chwazi plan ki bon pou ou. Nou gen opsyon debaz ak plan premium pou tout bezwen kredi." />
      </Head>
      <main className="p-6 max-w-5xl mx-auto grid gap-6">
        <h1 className="text-3xl font-bold">Plan & Pri / Pricing</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-bold text-xl">Plan Debaz / Basic Plan</h2>
              <p>$49 / mwa – Analiz kredi, 1 dispit pa mwa</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="font-bold text-xl">Plan Premium</h2>
              <p>$99 / mwa – Dispit illimite, asistans dedye, monitoring kredi</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
