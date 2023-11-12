"use client"

import { FunctionComponent } from "react";
import {
  Button,
  Checkbox,
  DataTable,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label
} from "./ui";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Plus } from "lucide-react";

interface TableProps {
  name: string,
  fields: any[],
  values: any
}

export const TTable: FunctionComponent<TableProps> = ({ name, fields, values }) => {
  // const createMutation = api.admin.create.useMutation()

  const cols: ColumnDef<typeof values>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    ...fields.map(field => ({
      id: field.name,
      accessorKey: field.name,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      header: ({ column }) => {
        return (
          <Button
            className='capitalize'
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {field.name}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue(field.name)}</div>
      ),
      enableHiding: true,
      enableSorting: true,
    })),
    {
      id: "select",
      header: () => (
        <Dialog>
          <DialogTrigger asChild>
            <Button size='sm' className='scale-75'><Plus /></Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add {name}</DialogTitle>
              <DialogDescription>
                Add new {name} here. Click Add {name} when you are done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {
                fields.map(({ name, isId, isRequired, type }) => {
                  return !isId && <div key={name} className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor={name} className="text-right capitalize">{name}</Label>
                    {type == 'String' &&
                      <Input id={name} className="col-span-3" required={isRequired} />}
                    {type == 'Int' && <Input id={name} className="col-span-3" required={isRequired}
                      type="number" />}
                  </div>
                })
              }
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => console.log('submit')}>Add {name}</Button>
              {/*{!createMutation.isLoading && <Button type="submit" onClick={() => createMutation.mutate({*/}
              {/*    table: name,*/}
              {/*    data: {}*/}
              {/*})}>Add {name}</Button>}*/}
              {/*{createMutation.isLoading && <Button disabled>*/}
              {/*    <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/>*/}
              {/*    Adding {name}...*/}
              {/*</Button>}*/}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
    },
  ]

  return <div className='mt-16'>
    <DataTable data={values} columns={cols} />
  </div>
}
