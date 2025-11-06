"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/base/table";
import { cn } from "@/lib/utils";

type Column<T> = {
  key: keyof T;
  label: string;
  className?: string;
};

type CustomTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  className?: string;
  striped?: boolean; // toggle แถวสลับสี
  onRowClick?: (item: T) => void;
};

export function CustomTable<T extends Record<string, any>>({
  columns,
  data,
  className,
  striped = true,
  onRowClick,
}: CustomTableProps<T>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 shadow-sm overflow-hidden",
        className
      )}>
      <Table>
        {/* หัวตาราง */}
        <TableHeader>
          <TableRow className="bg-gray-100 hover:bg-gray-100">
            {columns.map((col) => (
              <TableHead
                key={String(col.key)}
                className={cn("font-semibold text-gray-800", col.className)}>
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* เนื้อหา */}
        <TableBody>
          {data.length > 0 ? (
            data.map((item, idx) => (
              <TableRow
                key={idx}
                className={cn(
                  striped && idx % 2 === 0 ? "bg-gray-50" : "bg-white",
                  "hover:bg-gray-100 transition-colors"
                )}
                onClick={() => {
                  console.log("Click");
                  onRowClick?.(item);
                }}>
                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    className="text-gray-700 text-sm">
                    {String(item[col.key])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center text-gray-400 py-4">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
