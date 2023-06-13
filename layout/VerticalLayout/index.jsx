import React from "react";
import VerticalNavigation from "@/components/Shared/VerticalLayout/VerticalNavigation";
import VerticalFooter from "@/components/Shared/VerticalLayout/VerticalFooter";
export default function VerticalLayout({ children, className }) {
  return (
    <div className={className}>
      <VerticalNavigation /> {children} <VerticalFooter />
    </div>
  );
}