import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const product = getProduct(params.slug);
  if (!product) {
    return new NextResponse("Not found", { status: 404 });
  }

  const title = `Fembosco Datasheet - ${product.title}`;
  const lines = [
    title,
    "",
    `Manufacturer: ${product.manufacturer}`,
    `Category: ${product.category}`,
    `Application: ${product.application}`,
    `Unit Price: NGN ${product.price.toLocaleString("en-NG")} ${product.unit}`,
    `MOQ: ${product.moq}`,
    `Availability: ${product.stock}`,
    "",
    "Technical Specifications",
    "-----------------------",
    ...product.specs.map((s) => `${s.label}: ${s.value}`),
    "",
    "Bulk Pricing Tiers",
    "------------------",
    ...product.bulkTiers.map((t) => `Qty >= ${t.minQty}: ${t.discount}% off`),
    "",
    "Fembosco Engineering Limited",
    "Nigeria's Leading Supplier of Electrical & Industrial Systems",
    "https://fembosco.com",
  ];

  // Build a minimal valid PDF 1.4 document
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  const content = `BT /F1 20 Tf 50 740 Td (${esc(title)}) Tj ET\nBT /F1 10 Tf 50 720 Td (Fembosco Engineering Limited - Technical Datasheet) Tj ET\n`;
  let y = 690;
  const textOps: string[] = [];
  for (const line of lines.slice(3)) {
    textOps.push(`BT /F1 10 Tf 50 ${y} Td (${esc(line)}) Tj ET`);
    y -= 16;
    if (y < 40) break;
  }

  const streamContent = content + textOps.join("\n");
  const streamLen = Buffer.byteLength(streamContent, "latin1");

  const objs: string[] = [];
  objs[1] = "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n";
  objs[2] = "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n";
  objs[3] = "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n";
  objs[4] = `4 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream\nendobj\n`;
  objs[5] = "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n";

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  for (let i = 1; i <= 5; i++) {
    offsets[i] = Buffer.byteLength(pdf, "latin1");
    pdf += objs[i];
  }
  const xrefPos = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 6\n0000000000 65535 f \n`;
  for (let i = 1; i <= 5; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${product.slug}-datasheet.pdf"`,
    },
  });
}