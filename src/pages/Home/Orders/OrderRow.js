import React, { useEffect, useState } from "react";
import Orders from "./Orders";

const OrderRow = ({ handleStatusUpdate, handleDelete, order }) => {
  const { _id, serviceName, price, email, customer, phone, service, status } =
    order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <div>
      <tr className="w-full">
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-ghost rounded-full"
            >
              X
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-full w-24 h-24">
                {orderService?.img && (
                  <img
                    src={orderService.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br />
          <span className="badge badge-ghost badge-sm">price: ${price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button
            onClick={() => handleStatusUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            {status ? status : "pending"}
          </button>
        </th>
      </tr>
    </div>
  );
};

export default OrderRow;
