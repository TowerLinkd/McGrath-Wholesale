export default function Page() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px", fontFamily: "Arial, sans-serif", color: "#111" }}>

      {/* HERO */}
      <section style={{ maxWidth: "960px", margin: "0 auto 64px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "16px" }}>
          Christopher McGrath
        </h1>
        <p style={{ fontSize: "18px", color: "#555", maxWidth: "640px" }}>
          Public off-market and flip-ready real estate contracts available for qualified cash buyers in Bergen County, New Jersey.
        </p>
      </section>

      {/* PROPERTIES */}
      <section style={{ maxWidth: "960px", margin: "0 auto 64px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "500", marginBottom: "8px" }}>
          Available Contracts
        </h2>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
          All properties are under contract and offered via assignment of equitable interest.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          <div style={{ border: "1px solid #e5e5e5", borderRadius: "16px", padding: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "500" }}>
                123 Example St, Bergen County
              </h3>
              <span style={{ fontSize: "12px", padding: "4px 10px", borderRadius: "999px", background: "#111", color: "#fff" }}>
                Available
              </span>
            </div>

            <p style={{ color: "#555", marginBottom: "16px" }}>
              Distressed single-family. Flip ready. Clear title.
            </p>

            <ul style={{ fontSize: "14px", color: "#333", marginBottom: "16px" }}>
              <li>ARV: $750,000</li>
              <li>Estimated Rehab: $85,000</li>
              <li>Assignment Price: $525,000</li>
            </ul>

            <button style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "none", background: "#111", color: "#fff", cursor: "pointer" }}>
              Submit Offer
            </button>
          </div>
        </div>
      </section>

      {/* OFFER FORM */}
      <section style={{ maxWidth: "640px", margin: "0 auto 64px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "500", marginBottom: "16px" }}>
          Submit Offer
        </h2>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
          Offers are reviewed privately. Proof of funds required.
        </p>

        <form style={{ display: "grid", gap: "12px" }}>
          <input placeholder="Full Name" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />
          <input placeholder="Property Address" />
          <input placeholder="Offer Amount ($)" />
          <input type="file" accept=".pdf,.jpg,.png" />
          <textarea placeholder="Buyer experience / notes" rows={4} />
          <button style={{ padding: "12px", borderRadius: "10px", border: "none", background: "#111", color: "#fff", cursor: "pointer" }}>
            Submit Offer
          </button>
        </form>
      </section>

      {/* BUYERS LIST */}
      <section style={{ maxWidth: "640px", margin: "0 auto 96px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "500", marginBottom: "16px" }}>
          Join Buyers List
        </h2>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
          Receive future off-market opportunities before public release.
        </p>

        <form style={{ display: "grid", gap: "12px" }}>
          <input placeholder="Full Name" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />
          <textarea placeholder="Buying criteria (budget, area, asset type)" rows={4} />
          <button style={{ padding: "12px", borderRadius: "10px", border: "none", background: "#111", color: "#fff", cursor: "pointer" }}>
            Join Buyers List
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{ maxWidth: "960px", margin: "0 auto", fontSize: "12px", color: "#666" }}>
        <p>© {new Date().getFullYear()} Christopher McGrath. All rights reserved.</p>
        <p>Not a licensed real estate broker. All properties offered via equitable interest assignment only.</p>
        <p>For qualified real estate investors and cash buyers.</p>
      </footer>

    </main>
  );
}
