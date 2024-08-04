import React from "react";
import { FaFileInvoice, FaChartBar, FaCog } from "react-icons/fa";
import styles from "../styles/components/sidebar.module.scss";
import IconLink from "../shared/IconLink";

const menuItems = [
  { to: "/dashboard/invoices", icon: <FaFileInvoice />, text: "Счета" },
  { to: "/dashboard/reports", icon: <FaChartBar />, text: "Reports" },
  { to: "/dashboard/analytics", icon: <FaCog />, text: "Analytics" },
];

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      {menuItems.map((item, index) => (
        <IconLink key={index} to={item.to} icon={item.icon} text={item.text} />
      ))}
    </div>
  );
};

export default Sidebar;
