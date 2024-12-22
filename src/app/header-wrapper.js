import Header from "@/components/Header";
import React from "react";

function HeaderWrapper({ children }) {
  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default HeaderWrapper;
