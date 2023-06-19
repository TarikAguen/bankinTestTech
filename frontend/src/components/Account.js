import React, { useState } from "react";

const Account = ({ accounts }) => {
  const [showBalances, setShowBalances] = useState(false);
  return (
    <div className="container">
      {accounts.map((account) => (
        <div className="card" key={account.id}>
          <h1>Bankin'</h1>
          <h2>Mes comptes</h2>
          <p>Voici le détail de vos soldes:</p>

          {showBalances && (
            <>
              <div className="wrapper">
                <h3>Compte courant :</h3>
                <p>{account.balance}€</p>
              </div>
              <div className="wrapper">
                <h2>Compte épargne :</h2>
                <p>{account.balance}€</p>
              </div>
            </>
          )}

          <button onClick={() => setShowBalances(!showBalances)}>
            {showBalances ? "Cacher les soldes" : "Afficher les soldes"}
          </button>
          <button className="buttonStatic">Optimiser mon épargne</button>
        </div>
      ))}
    </div>
  );
};

export default Account;
