import React, { useEffect } from "react";
import { BsCurrencyExchange } from "react-icons/bs";

function PriceList({ cat, product, autoDownload = false }) {
  const downloadPriceList = () => {
    const items = product.filter((p) => cat === "All" || p.category === cat);

    // ✅ Build the list properly using .map() and .join()
    const listItems = items
      .map((p) => `<li>${p.name} - ₦${p.price.toLocaleString()}</li>`)
      .join("");

    // ✅ Use basic inline styling for better appearance in Word
    const content = `
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { color: #0a2e4e; }
            ul { list-style-type: disc; margin-left: 20px; }
            li { margin: 5px 0; font-size: 14px; }
          </style>
        </head>
        <body>
          <h2>${cat} Price List</h2>
          <ul>${listItems}</ul>
        </body>
      </html>
    `;

    const blob = new Blob(["\ufeff", content], { type: "application/msword" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${cat}_Price_List.doc`;
    link.click();
  };

  // 🧠 Auto-download when category changes, only if enabled
  useEffect(() => {
    if (autoDownload && cat) {
      downloadPriceList();
    }
  }, [cat]);

  return (
    <div className="word-doc-download" onClick={downloadPriceList}>
      <BsCurrencyExchange size="20" />
      <p>Download Price List</p>
    </div>
  );
}

export default PriceList;
