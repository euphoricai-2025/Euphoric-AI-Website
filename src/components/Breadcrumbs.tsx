import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  currentPage?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, currentPage }) => {
  const location = useLocation();

  // Auto-generate breadcrumbs from URL if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;

    const paths = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', url: '/' }
    ];

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const name = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      if (index === paths.length - 1 && currentPage) {
        breadcrumbs.push({ name: currentPage, url: currentPath });
      } else {
        breadcrumbs.push({ name, url: currentPath });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  // Generate schema markup for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `https://euphoricai.com${item.url}`,
        name: item.name
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav
        aria-label="Breadcrumb"
        className="flex items-center space-x-2 text-sm text-gray-600 mb-4"
      >
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.url}>
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-gray-900 font-medium">
                {item.name}
              </span>
            ) : (
              <Link
                to={item.url}
                className="hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumbs;