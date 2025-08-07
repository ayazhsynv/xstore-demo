"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  showBreadcrumbs?: boolean;
  pageTitle?: string;
}

const Layout = ({
  children,
  breadcrumbs,
  showBreadcrumbs = true,
  pageTitle,
}: LayoutProps) => {
  const pathname = usePathname();

  // Don't show breadcrumbs on home page
  const shouldShowBreadcrumbs = showBreadcrumbs && pathname !== "/";

  return (
    <div>
      <Header />

      {/* Breadcrumbs section */}
      {shouldShowBreadcrumbs && (
        <div className="page-container justify-center items-center">
          <div className="pt-18 pb-2">
            <Breadcrumbs items={breadcrumbs} />
            {pageTitle && (
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {pageTitle}
              </h1>
            )}
          </div>
        </div>
      )}

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
