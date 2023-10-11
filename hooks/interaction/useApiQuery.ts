import { useState, useEffect } from 'react';
import { supabase } from '../../src/supabaseClient';

interface QueryOptions {
  columns?: string;
  conditionColumn?: string;
  conditionValue?: string | number;
  orderColumn?: string;
  orderAscending?: boolean;
}

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
  id?: string;
}

interface SupabaseError extends Error {
  id: string;
  message: string;
}

function isSupabaseError(error: any): error is SupabaseError {
  return error && typeof error.id === 'string' && typeof error.message === 'string';
}

function isGenericStringError(error: any): error is GenericStringError {
  return error && typeof error.message === 'string';
}

export const useApiQuery = (table: string, options: QueryOptions = {}) => {
  const [data, setData] = useState<Product[] | null>(null);
  const [error, setError] = useState<SupabaseError | GenericStringError | null>(null);
  const [loading, setLoading] = useState(true);

  const {
    columns = 'id, name, price, image, stock',
    conditionColumn = null,
    conditionValue = null,
    orderColumn = null,
    orderAscending = true,
  } = options;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let query = supabase.from(table).select(columns);
        if (conditionColumn && conditionValue !== null) {
          query = query.filter(conditionColumn, 'eq', conditionValue);
        }
        if (orderColumn) {
          query = query.order(orderColumn, { ascending: orderAscending });
        }
        const { data: fetchedData, error: fetchedError } = await query;
        if (fetchedError) throw fetchedError;
        if (Array.isArray(fetchedData) && fetchedData.every(item => typeof item === 'number')) {
          setData(fetchedData as unknown as Product[]);
        } else {
          throw new Error("Data is not of expected type");
        }
      } catch (error: any) {
        if (isSupabaseError(error)) {
          console.error(`Supabase Error ID: ${error.id}, Message: ${error.message}`);
          setError(error);
        } else if (isGenericStringError(error)) {
          console.error(`Generic Error: ${error.message}`);
          setError(error);
        } else {
          const errMsg = error.message || "An unexpected error occurred";
          console.error(`Unknown Error: ${errMsg}`);
          setError({ name: 'UnknownError', message: errMsg });
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [table, columns, conditionColumn, conditionValue, orderColumn, orderAscending]);

  return { data, error, loading };
};
