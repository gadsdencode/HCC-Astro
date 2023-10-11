interface Product {
    id: number;
    name: string | null;
    price: number | null;
    image: string | null;
    stock: number | null;
    created_at: Date;
  }
  
  interface GenericStringError {
    message: string;
    id?: string; // Optionally include 'id' if you expect it to sometimes be present
  }

  interface SupabaseError extends Error {
    id?: string;
  }

  interface StoreDoubleColumnProps {
    productTitle: string;
    // Add other props if needed
  }