"use client";

import { type Message } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";
import UnreadIcon from "~/components/icons/unread-icon";
import { formatDateTime } from "~/lib/utils";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import { type ReactNode } from "react";

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "read",
    header: "",
    cell: ({ cell }) => {
      if (cell.getValue() === false) {
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
    cell: ({ cell }) => {
      return <span className="pl-4">{cell.getValue() as ReactNode}</span>;
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
    cell: ({ cell }) => {
      return <span className="pl-4">{cell.getValue() as ReactNode}</span>;
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
      return (
        <span className="w-fit overflow-auto whitespace-nowrap text-nowrap pl-4">
          {formatDateTime(cell.getValue() as Date)}
        </span>
      );
    },
  },
];
