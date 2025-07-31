import React from "react";
import Head from "next/head";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>Sou Nou | Credit Repair Services</title>
        <meta name="description" content="Aprann plis sou ekip pwofesyonèl ki ap ede w repare kredi w ak bati avni finansye ou." />
      </Head>
      <main className="p-6 max-w-4xl mx-auto grid gap-6">
        <h1 className="text-3xl font-bold">Sou Nou / About Us</h1>
        <p>
          Nou se yon ekip pwofesyonèl ki espesyalize nan repare kredi epi ede kliyan nou yo
          jwenn pi bon posiblite finansye. Misyon nou se edike, sipòte, epi aji pou kliyan
          nou yo ka reyalize objektif ekonomik yo avèk konfyans.
        </p>
        <p>
          Avèk ane eksperyans ak pasyon pou sèvis kliyan, nou travay chak jou pou asire
          chak moun jwenn solisyon kredi ki adapte ak bezwen pa yo.
        </p>
      </main>
    </>
  );
}
