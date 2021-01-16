import React from "react";
import { Link, useHistory } from "react-router-dom";
import { TableRowStyled } from "../styles/TableRowStyled";

export default function TableRow({
  id,
  orgNmr,
  name,
  paymentTerm,
  website,
  email,
  detailIcon,
  type,
}) {
  const history = useHistory();

  const handleOnClick = (e, id) => {
    console.log(e.target.nodeName);

    if (e.target.nodeName == "DIV") history.push(`/customers/${id}`);
  };
  return (
    <TableRowStyled type={type} onClick={(e) => handleOnClick(e, id)}>
      <div className="id-cell">{orgNmr}</div>
      <div>{name}</div>
      <div>{paymentTerm}</div>
      <div>{website}</div>
      <div>{email}</div>
      <span>
        {type === "notHead" ? (
          <Link to={`/customers/${id}/edit`}>{detailIcon}</Link>
        ) : (
          detailIcon
        )}
      </span>
    </TableRowStyled>
  );
}
