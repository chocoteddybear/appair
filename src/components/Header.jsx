import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="18"
            viewBox="0 0 25 18"
          >
            <path
              fill="#000"
              d="M2.02.464h20.96a2.02 2.02 0 1 1 0 4.04H2.02a2.02 2.02 0 0 1 0-4.04zm0 6.463h20.96a2.02 2.02 0 0 1 0 4.039H2.02a2.02 2.02 0 1 1 0-4.04zm0 6.462h20.96a2.02 2.02 0 1 1 0 4.04H2.02a2.02 2.02 0 1 1 0-4.04z"
            />
          </svg>
        </div>
        <div className="header-title">Chat</div>
      </div>
      <div className="header-right">
        <div className="header-cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="26"
            viewBox="0 0 29 26"
          >
            <path
              fill="#2A4EFF"
              d="M14.5 20.52c-1.457 0-2.636-1.225-2.636-2.74 0-1.513 1.18-2.739 2.636-2.739 1.457 0 2.636 1.226 2.636 2.74 0 1.514-1.18 2.74-2.636 2.74zM10.545 9.563L14.5 3.534l3.955 6.028h-7.91zm10.823 0L15.594.582C15.344.185 14.922 0 14.5 0c-.422 0-.844.192-1.094.582l-5.774 8.98H1.318c-.725 0-1.318.616-1.318 1.37 0 .13.02.253.046.37L3.388 24c.31 1.15 1.331 2 2.544 2h17.136c1.213 0 2.234-.85 2.538-2.007l3.341-12.698c.033-.11.053-.233.053-.363 0-.754-.593-1.37-1.318-1.37h-6.314z"
            />
          </svg>
          <div className="cart-number">
            <span>2</span>
          </div>
        </div>
      </div>
    </header>
  );
}
