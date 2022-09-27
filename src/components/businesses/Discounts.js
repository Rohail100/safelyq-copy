import React from "react";
import { IconButton  } from "./StyledComponents";

function Discounts() {
  return (
    <div className="box is-shadowless">
      <ul>
        <li>
          <div className="is-flex is-justify-content-space-between">
            <h6 className="mt-2 mb-1 title is-6">
              Discount
              <br />
              <small>
                <i>Expires 07 Jan 2023</i>
              </small>
            </h6>
            <div>
              <IconButton className="button-icon is-active mr-2 button is-small">
                <span className="icon">
                  <i name="heart-o" className="fa fa-heart-o"></i>
                </span>
              </IconButton>
              <IconButton className="button-icon is-active button is-small">
                <span className="icon">
                  <i name="eye" className="fa fa-eye"></i>
                </span>
              </IconButton>
            </div>
          </div>
          <a href="/#">
            <small>Hello coupon is offered for everyone.</small>
          </a>
        </li>
        <div className="has-text-centered">
          <a href="/#">
              More
              <span className="icon">
                <i name="angle-down" className="fa fa-angle-down"></i>
              </span>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Discounts;
