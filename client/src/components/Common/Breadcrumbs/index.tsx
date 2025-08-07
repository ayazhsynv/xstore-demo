"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  showHome = true,
}) => {
  const pathname = usePathname();

  // Auto-generate breadcrumbs from pathname if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    if (showHome) {
      breadcrumbs.push({ label: "Home", href: "/" });
    }

    pathSegments.forEach((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      breadcrumbs.push({ label, href });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-gray-900 font-medium ">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-gray-300 transition-colors"
            >
              {item.label}
            </Link>
          )}

          {index < breadcrumbItems.length - 1 && (
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
