import React, { useMemo } from "react";
import { useTable, useExpanded, Column, Row, CellProps } from "react-table";
import styles from "../styles/pages/invoices.module.scss";
import { Card } from "../shared/Card";

interface Invoice {
  number: string;
  counterparty: string;
  comment: string;
  inputDate: string;
  paymentPercent: string;
  potentialShipmentDate: string;
  actualShipmentDate: string;
  details: Array<{ name: string; quantity: number; stock: number }>;
}

interface RowWithExpanded<D extends object> extends Row<D> {
  isExpanded: boolean;
  getToggleRowExpandedProps: (props?: any) => any;
}

const ExpanderCell: React.FC<CellProps<Invoice>> = ({ row }) => {
  const expandedRow = row as RowWithExpanded<Invoice>;
  return (
    <span {...expandedRow.getToggleRowExpandedProps()}>
      {expandedRow.isExpanded ? "▼" : "▶"}
    </span>
  );
};

const SubTable: React.FC<{
  data: Array<{ name: string; quantity: number; stock: number }>;
}> = ({ data }) => {
  const columns = useMemo<
    Column<{ name: string; quantity: number; stock: number }>[]
  >(
    () => [
      { Header: "Наименование", accessor: "name" },
      { Header: "Количество в счете", accessor: "quantity" },
      { Header: "Количество на складе", accessor: "stock" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <Card rounded="none" padding="xs" text="md">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

const Invoices: React.FC = () => {
  const data = useMemo<Invoice[]>(
    () => [
      {
        number: "001",
        counterparty: "Компания A",
        comment: "Первый счет",
        inputDate: "2024-01-01",
        paymentPercent: "50%",
        potentialShipmentDate: "2024-01-15",
        actualShipmentDate: "2024-01-16",
        details: [
          { name: "Продукт 1", quantity: 10, stock: 8 },
          { name: "Продукт 2", quantity: 5, stock: 5 },
        ],
      },
      {
        number: "002",
        counterparty: "Компания B",
        comment: "Второй счет",
        inputDate: "2024-01-02",
        paymentPercent: "75%",
        potentialShipmentDate: "2024-01-16",
        actualShipmentDate: "2024-01-17",
        details: [
          { name: "Продукт 3", quantity: 7, stock: 10 },
          { name: "Продукт 4", quantity: 2, stock: 2 },
        ],
      },
      {
        number: "003",
        counterparty: "Компания C",
        comment: "Третий счет",
        inputDate: "2024-01-03",
        paymentPercent: "60%",
        potentialShipmentDate: "2024-01-17",
        actualShipmentDate: "2024-01-18",
        details: [
          { name: "Продукт 5", quantity: 4, stock: 7 },
          { name: "Продукт 6", quantity: 8, stock: 6 },
        ],
      },
      {
        number: "004",
        counterparty: "Компания D",
        comment: "Четвертый счет",
        inputDate: "2024-01-04",
        paymentPercent: "90%",
        potentialShipmentDate: "2024-01-18",
        actualShipmentDate: "2024-01-19",
        details: [
          { name: "Продукт 7", quantity: 9, stock: 12 },
          { name: "Продукт 8", quantity: 3, stock: 3 },
        ],
      },
      {
        number: "005",
        counterparty: "Компания E",
        comment: "Пятый счет",
        inputDate: "2024-01-05",
        paymentPercent: "80%",
        potentialShipmentDate: "2024-01-19",
        actualShipmentDate: "2024-01-20",
        details: [
          { name: "Продукт 9", quantity: 6, stock: 4 },
          { name: "Продукт 10", quantity: 1, stock: 1 },
        ],
      },
      {
        number: "006",
        counterparty: "Компания F",
        comment: "Шестой счет",
        inputDate: "2024-01-06",
        paymentPercent: "70%",
        potentialShipmentDate: "2024-01-20",
        actualShipmentDate: "2024-01-21",
        details: [
          { name: "Продукт 11", quantity: 11, stock: 15 },
          { name: "Продукт 12", quantity: 4, stock: 5 },
        ],
      },
      {
        number: "007",
        counterparty: "Компания G",
        comment: "Седьмой счет",
        inputDate: "2024-01-07",
        paymentPercent: "85%",
        potentialShipmentDate: "2024-01-21",
        actualShipmentDate: "2024-01-22",
        details: [
          { name: "Продукт 13", quantity: 13, stock: 10 },
          { name: "Продукт 14", quantity: 5, stock: 6 },
        ],
      },
      {
        number: "008",
        counterparty: "Компания H",
        comment: "Восьмой счет",
        inputDate: "2024-01-08",
        paymentPercent: "95%",
        potentialShipmentDate: "2024-01-22",
        actualShipmentDate: "2024-01-23",
        details: [
          { name: "Продукт 15", quantity: 12, stock: 9 },
          { name: "Продукт 16", quantity: 7, stock: 8 },
        ],
      },
    ],
    []
  );

  const columns = useMemo<Column<Invoice>[]>(
    () => [
      { Header: "Номер", accessor: "number" },
      { Header: "Контрагент", accessor: "counterparty" },
      { Header: "Комментарий", accessor: "comment" },
      { Header: "Дата ввода", accessor: "inputDate" },
      { Header: "Процент оплаты", accessor: "paymentPercent" },
      {
        Header: "Потенциальная дата отгрузки",
        accessor: "potentialShipmentDate",
      },
      { Header: "Фактическая дата отгрузки", accessor: "actualShipmentDate" },
      {
        id: "expander",
        Header: () => null,
        Cell: ExpanderCell,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Invoice>(
      {
        columns,
        data,
      },
      useExpanded
    );

  return (
    <Card rounded="lg" padding="xl" text="sm">
      <div className={styles.tableContainer}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const expandedRow = row as RowWithExpanded<Invoice>;
              return (
                <React.Fragment key={row.id}>
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                  {expandedRow.isExpanded ? (
                    <tr>
                      <td colSpan={columns.length}>
                        <SubTable data={expandedRow.original.details} />
                      </td>
                    </tr>
                  ) : null}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Invoices;
