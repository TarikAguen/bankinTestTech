const express = require("express");
const router = express.Router();
const {
  authenticate,
  accountRequest,
  calculateTotalBalance,
} = require("../controllers/authService");

router.get("/", async (req, res) => {
  try {
    const accessToken = await authenticate();
    const accounts = await accountRequest(accessToken);
    const pagination = accounts.pagination;

    const roundedSum = calculateTotalBalance(accounts);
    const filteredAccounts = accounts.resources.map((account) => {
      return {
        id: account.id,
        name: account.name,
        balance: account.balance,
      };
    });

    const response = {
      rounded_sum: roundedSum,
      accounts: filteredAccounts,
      pagination: pagination,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur s'est produite lors de l'opération");
  }
});

module.exports = router;
