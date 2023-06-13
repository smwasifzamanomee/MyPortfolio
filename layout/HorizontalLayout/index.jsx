import React from "react";
import HorizontalNavigation from "@/components/Shared/HorizontalLayout/HorizontalNavigation";
import HorizontalFooter from "@/components/Shared/HorizontalLayout/HorizontalFooter";

export default function HorizontalLayout({ children, className }) {
  return (
    <div className={className}>
      <HorizontalNavigation /> {children} <HorizontalFooter />
    </div>
  );
}