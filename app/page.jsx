import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// NOTE: This MVP stores offers in-memory for dashboard viewing.
// In production, connect to a database (Supabase/Firebase) with auth.

export default function RealEstateWholesalingSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">

      {/* HERO */}
      <section className="max-w-5xl mx-auto mb-16">
        <h1 className="text-4xl font-semibold mb-4">Christopher McGrath</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Public off-market and flip-ready real estate contracts available for qualified cash buyers in Bergen County, New Jersey.
        </p>
      </section>

      {/* PROPERTIES */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-medium mb-2">Available Contracts</h2>
        <p className="text-sm text-gray-500 mb-6">All properties are currently under contract and offered via assignment of equitable interest.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium">123 Example St, Bergen County</h3>
                <Badge>Available</Badge>
              </div>
              <p className="text-gray-600 mb-4">Distressed single-family. Flip ready. Clear title.</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>• ARV: $750,000</li>
                <li>• Estimated Rehab: $85,000</li>
                <li>• Assignment Price: $525,000</li>
              </ul>
              <Button className="rounded-xl w-full">View Property & Submit Offer</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* OFFER FORM */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-medium mb-4">Submit Offer</h2>
        <p className="text-sm text-gray-500 mb-6">Offers are reviewed in a private dashboard. Proof of funds required.</p>

        <div className="grid gap-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Property Address" />
          <Input placeholder="Offer Amount ($)" />
          <Input type="file" accept=".pdf,.jpg,.png" />
          <Textarea placeholder="Buyer experience / notes" />
          <Button className="rounded-xl">Submit Offer</Button>
        </div>
      </section>

      {/* BUYERS LIST */}
      <section className="max-w-3xl mx-auto mb-24">
        <h2 className="text-2xl font-medium mb-4">Join Buyers List</h2>
        <p className="text-sm text-gray-500 mb-6">Receive future off-market opportunities before they are publicly listed.</p>

        <div className="grid gap-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
          <Textarea placeholder="Buying criteria (budget, area, asset type)" />
          <Button className="rounded-xl">Join List</Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Christopher McGrath. All rights reserved.</p>
        <p className="mt-2">Not a licensed real estate broker. All properties offered via equitable interest assignment only.</p>
        <p className="mt-1">For qualified real estate investors and cash buyers.</p>
      </footer>
    </div>
  );
}
