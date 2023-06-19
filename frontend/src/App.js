import React, { useState, useEffect } from "react";
import axios from "axios";
import Account from "./components/Account";
import "./styles/account.scss";

const App = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get("http://localhost:3050/");
        const { accounts } = response.data;
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAccounts();
  }, []);
 
  return (
    <div className=".card">
      <Account accounts={accounts} />
    </div>
  );
};

export default App;
