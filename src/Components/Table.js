import React from "react";

const Table = ({ data }) => {
  return (
    <table className="min-w-full bg-white rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <TableHeader>City Code</TableHeader>
          <TableHeader>Country Code</TableHeader>
          <TableHeader>Time Zone</TableHeader>
          <TableHeader>City Name</TableHeader>
          <TableHeader>Code</TableHeader>
          <TableHeader>IATA Type</TableHeader>
          <TableHeader>Coordinates</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index} index={index}>
            <TableCell>{item.city_code}</TableCell>
            <TableCell>{item.country_code}</TableCell>
            <TableCell>{item.time_zone}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.code}</TableCell>
            <TableCell>{item.iata_type}</TableCell>
            <TableCell>
              {item.coordinates.lat}, {item.coordinates.lon}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

const TableHeader = ({ children }) => (
  <th className="px-6 py-3 text-left font-semibold text-gray-600">{children}</th>
);

const TableRow = ({ children, index }) => (
  <tr className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>{children}</tr>
);

const TableCell = ({ children }) => (
  <td className="px-6 py-4 whitespace-no-wrap">{children}</td>
);

export default Table;
