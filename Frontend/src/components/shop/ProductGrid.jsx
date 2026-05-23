import ProductCard from './ProductCard';

const ProductGrid = ({ items = [], isLoading, error, emptyMessage }) => {
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-72 animate-pulse rounded-3xl border border-blue-100 bg-surface shadow-sm shadow-blue-500/5" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-sm text-red-600">{error}</div>;
  }

  if (!items.length) {
    return <div className="rounded-3xl border border-blue-100 bg-surface p-6 text-sm text-inkLight shadow-sm shadow-blue-500/5">{emptyMessage}</div>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
