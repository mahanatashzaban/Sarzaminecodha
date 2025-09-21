import { ScrollArea } from "./ui/scroll-area";

// Mock customer data - in a real app this would come from an API
const customers = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `شرکت ${i + 1}`,
  logo: `https://images.unsplash.com/photo-1622465911368-72162f8da3e2?w=100&h=100&fit=crop&crop=center&q=80`,
  website: `https://customer${i + 1}.com`,
  description: `شرکت معتبر و پیشرو در حوزه فعالیت خود`
}));

export function CustomerLogos() {
  const handleCustomerClick = (customer: typeof customers[0]) => {
    // In a real app, this would redirect to the customer's website
    window.open(customer.website, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">مشتریان ما</h2>
          <p className="text-gray-600 text-lg">
            افتخار همکاری با برندها و شرکت‌های معتبر را داریم
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <ScrollArea className="h-96 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  onClick={() => handleCustomerClick(customer)}
                  className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-200 hover:border-primary"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 text-center mb-1">
                    {customer.name}
                  </h3>
                  <p className="text-xs text-gray-500 text-center">
                    {customer.description}
                  </p>
                  <div className="mt-2 text-center">
                    <span className="text-xs text-primary group-hover:underline">
                      مشاهده نمونه کار
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}