"use client";
import { useParams } from "next/navigation";

export default function PortfolioDetails() {
  const { id } = useParams();
  return <div>portfolio details: {id}</div>;
}
