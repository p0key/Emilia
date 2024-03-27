import { ColumnDef, flexRender } from '@tanstack/react-table';
import classNames from 'classnames';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import {
  TopRegionsTableDataType,
  topRegionsTableData
} from 'data/TopRegionsTableData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const columns: ColumnDef<TopRegionsTableDataType>[] = [
  {
    header: 'PAÍS',
    accessorFn: rowData => rowData.country.name,
    cell: ({ row }) => {
      const serial = row.index + 1;
      const { country } = row.original;
      return (
        <div className="d-flex align-items-center">
          <h6 className="mb-0 me-3">{serial}.</h6>
          <Link to="#!">
            <div className="d-flex justify-content-center">
              <img src={country.flag} alt="" width={24} />
              <p className="mb-0 ps-3 text-primary fw-bold fs-9">
                {country.name}
              </p>
            </div>
          </Link>
        </div>
      );
    },
    meta: {
      headerProps: { style: { width: '32%' }, className: 'ps-0' },
      cellProps: { className: 'white-space-nowrap align-middle ps-0' }
    }
  },
  {
    header: 'CIUDADANOS',
    accessorFn: rowData => rowData.users.number,
    cell: ({ row: { original } }) => {
      const { users } = original;
      return (
        <h6 className="mb-0">
          {users.number}
          <span className="text-body-tertiary fw-semibold ms-2">
            ({users.percantage})
          </span>
        </h6>
      );
    },
    meta: {
      headerProps: { style: { width: '17%' } },
      cellProps: { className: 'align-middle' }
    }
  },
  {
    header: 'EVENTOS',
    accessorFn: rowData => rowData.transactions.number,
    cell: ({ row: { original } }) => {
      const { transactions } = original;
      return (
        <h6 className="mb-0">
          {transactions.number}
          <span className="text-body-tertiary fw-semibold ms-2">
            ({transactions.percantage})
          </span>
        </h6>
      );
    },
    meta: {
      cellProps: { className: 'text-end' },
      headerProps: {
        style: { width: '16%' },
        className: 'text-end align-middle'
      }
    }
  }
];

const EcomTopRegionsTable = () => {
  const table = useAdvanceTable({
    data: topRegionsTableData,
    columns,
    pageSize: 5,
    pagination: true,
    selectionColumnWidth: '30px',
    sortable: true
  });

  const { getRowModel, getFlatHeaders } = table;

  return (
    <AdvanceTableProvider {...table}>
      {/* <Scrollbar autoHeight autoHeightMax="100%"> */}
      <div className="scrollbar">
        <Table className="fs-10 mb-0 border-top border-translucent scrollbar">
          <thead>
            <tr>
              {getFlatHeaders().map(header => {
                return (
                  <th
                    key={header.id}
                    {...header.column.columnDef.meta?.headerProps}
                    className={classNames(
                      'sort',
                      header.column.columnDef.meta?.headerProps?.className,
                      {
                        desc: header.column.getIsSorted() === 'desc',
                        asc: header.column.getIsSorted() === 'asc'
                      }
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} {...cell.column.columnDef.meta?.cellProps}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <AdvanceTableFooter className="gx-0" navBtn showViewAllBtn={false} />
      {/* </Scrollbar> */}
    </AdvanceTableProvider>
  );
};

export default EcomTopRegionsTable;
