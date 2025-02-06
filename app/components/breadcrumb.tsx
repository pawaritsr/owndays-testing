'use client'

import Link from "next/link";
import "../globals.css";

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb-list flex space-x-2 text-gray-600">
        {items.map((item, index) => (
          <li key={item}>
            {index !== 0 && <span className="greater-than">&gt;</span>}
            <Link href={`#`}>
              <span className="text-foreground text-xs">{item}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
Breadcrumb.displayName = "Breadcrumb";
export default Breadcrumb;
