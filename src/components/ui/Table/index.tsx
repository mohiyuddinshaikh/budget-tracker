import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

interface CommonTableProps<T> {
  data: T[];
  columns: readonly { key: keyof T; label: string; align?: "left" | "right" }[];
  caption?: string;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  isAction?: boolean;
}

export default function CommonTable<T extends Record<string, any>>({
  data,
  columns,
  caption,
  onEdit,
  onDelete,
  isAction,
}: CommonTableProps<T>) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
    <Table className="w-full">
      {caption && <TableCaption>{caption}</TableCaption>}

      <TableHeader className="bg-gray-50 border-b border-gray-200">
        <TableRow>
          {columns.map((col) => (
            <TableHead
              key={String(col.key)}
              className={`px-4 py-3 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider ${col.align === "right" ? "text-right" : ""} border-r border-gray-200 last:border-r-0`}
            >
              {col.label}
            </TableHead>
          ))}
          {isAction ? (
            <TableHead className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</TableHead>
          ) : null}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            {columns.map((col) => (
              <TableCell
                key={String(col.key)}
                className={`px-4 py-3 whitespace-nowrap text-sm text-gray-700 ${col.align === "right" ? "text-right" : ""} border-r border-gray-100 last:border-r-0`}
              >
                {String(row[col.key])}
              </TableCell>
            ))}
            {isAction ? (
              <TableCell className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                <div className="flex justify-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit?.(row)}
                  title="Edit"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete?.(row)}
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                </div>
              </TableCell>
            ) : null}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
