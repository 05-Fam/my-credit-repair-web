import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Image from "next/image";

// Simulated SendGrid email integration placeholder
const sendEmailConfirmation = async (provider) => {
  try {
    const response = await fetch("/api/send-confirmation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "client@example.com",
        subject: `Konfimasyon Peman atravè ${provider}`,
        message: `Mèsi pou peman ou atravè ${provider}. Nou resevwa li avèk siksè. / Thank you for your payment via ${provider}. We have successfully received it.`
      })
    });
    if (response.ok) {
      alert(`Mèsi pou peman ou pa ${provider}. Yon konfimasyon ap voye pa imèl.`);
    } else {
      alert("Nou pa t kapab voye konfimasyon imèl la. / We were unable to send the confirmation email.");
    }
  } catch (error) {
    console.error("Email error:", error);
    alert("Gen yon erè pandan n ap voye konfimasyon an.");
  }
};

export default function CreditRepairHome() {
  return (
    <main className="p-6 grid gap-6 max-w-6xl mx-auto">
      {/* Header with Logo */}
      <div className="flex flex-col items-center gap-4">
        <Image src="/logo.png" alt="Company Logo" width={80} height={80} />
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Repare Kredi Ou avèk Konfyans – Credit Repair Services
        </motion.h1>
        <p className="text-center text-lg text-muted-foreground">
          Nou ede ou netwaye dosye kredi ou, konteste erè yo, epi bati avni finansye ou — 100% legal, etik, ak triling (Kreyòl, Anglè, Espayòl).
        </p>
      </div>

      {/* Free Consultation Form */}
      <Card className="shadow-xl rounded-2xl">
        <CardContent className="grid gap-4 p-6">
          <h2 className="text-2xl font-semibold">Mande Konsiltasyon Gratis</h2>
          <Input placeholder="Non ou / Your Name" />
          <Input placeholder="Imèl ou / Your Email" type="email" />
          <Textarea placeholder="Kisa ou ta renmen nou ede ou ak? / How can we help you?" />
          <Button className="w-full">Voye Demann / Submit Request</Button>
        </CardContent>
      </Card>

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-4 text-center">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Analiz Kredi Gratis / Free Credit Analysis</h3>
            <p>Nou revize dosye ou san frè pou di ou kisa ki ka korije. / We review your report and identify what can be fixed.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Dispit Erè Legalman / Legal Dispute Process</h3>
            <p>Nou voye lèt dapre lalwa FCRA pou retire sa ki pa egzak. / We dispute inaccuracies legally under the FCRA.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Bati Kredi ou / Build Your Credit</h3>
            <p>Nou gide w pou w mete bon kont sou dosye ou epi ogmante nòt ou. / We help you add positive accounts and increase your score.</p>
          </CardContent>
        </Card>
      </section>

      {/* About & FAQ */}
      <section className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold">Sou Nou / About Us</h3>
            <p>
              Nou se yon ajans repitasyon ki baze Ozetazini, ki konsantre sou edike ak ede moun kominote a amelyore kredi yo. / We are a trusted U.S.-based credit repair agency focused on helping and educating our community.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold">Kesyon Moun Poze Souvan / FAQ</h3>
            <ul className="list-disc list-inside">
              <li>Konbyen tan pwosesis la pran? / How long does it take?</li>
              <li>Eske li legal? / Is this legal?</li>
              <li>Ki dokiman mwen bezwen? / What documents do I need?</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Payment Section */}
      <Card className="mt-6">
        <CardContent className="p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Peman / Payment</h3>
          <p className="mb-4">
            Ou ka peye pou sèvis nou yo fasilman atravè Stripe, PayPal, oswa Square. / You can pay for our services securely using Stripe, PayPal, or Square.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="https://buy.stripe.com/test_4gw14f7Lk4RQ2AM5kk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendEmailConfirmation("Stripe")}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Stripe Checkout
              </Button>
            </a>
            <a
              href="https://www.paypal.com/paypalme/yourbusinessname"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendEmailConfirmation("PayPal")}
            >
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Pay with PayPal
              </Button>
            </a>
            <a
              href="https://checkout.square.site/pay/yourcheckoutid"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendEmailConfirmation("Square")}
            >
              <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                Pay via Square
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Yon konfimasyon peman ap voye pa imèl apre tranzaksyon ou. / A payment confirmation will be sent to your email after transaction.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
