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
}

export default function CommonTable<T extends Record<string, any>>({
  data,
  columns,
  caption,
  onEdit,
  onDelete,
}: CommonTableProps<T>) {
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}

      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead
              key={String(col.key)}
              className={col.align === "right" ? "text-right" : ""}
            >
              {col.label}
            </TableHead>
          ))}
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            {columns.map((col) => (
              <TableCell
                key={String(col.key)}
                className={col.align === "right" ? "text-right" : ""}
              >
                {String(row[col.key])}
              </TableCell>
            ))}
            <TableCell className="text-center flex justify-center gap-2">
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
