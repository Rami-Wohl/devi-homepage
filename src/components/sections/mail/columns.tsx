"use client";

import { type Message } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";
import UnreadIcon from "~/components/icons/unread-icon";
import { formatDateTime } from "~/lib/utils";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "read",
    header: "",
    cell: ({ cell }) => {
      if (cell && cell.getValue() === false) {
        return <UnreadIcon />;
      }

      if (cell.getValue() === true) {
        return null;
      }
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          {column.getIsSorted() === "desc" && (
            <ArrowUp className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "asc" && (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
          {!column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          {column.getIsSorted() === "desc" && (
            <ArrowUp className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "asc" && (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
          {!column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sent
          {column.getIsSorted() === "desc" && (
            <ArrowUp className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "asc" && (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
          {!column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      );
    },
    cell: ({ cell }) => {
      return formatDateTime(cell.getValue() as Date);
    },
  },
];
