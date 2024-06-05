"use client";

import { useUser } from "@clerk/nextjs";
import { FileType } from "../../../typings";
import { Button } from "../ui/button";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useState } from "react";

export function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  const { user } = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  return (
    <div>
      <Button onClick={() => setSort(sort === "desc" ? "asc" : "desc")}>
        Ordenar por {sort === "desc" ? "mais recente" : "mais antigo"}
      </Button>

      <DataTable columns={columns} data={skeletonFiles} />
    </div>
  );
}
