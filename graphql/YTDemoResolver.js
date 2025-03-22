const resolvers = {
  Query: {
    getPremiumAdjustment: (_, { id }) => {
      // Placeholder for fetching a premium adjustment by ID
      return {
        id: id,
        Comment: "Sample Comment",
        Total_Borrower_Fees: 1000.0,
        CU_Retail_Rate: 3.5,
        Protected_Loan_Amount: 50000.0,
        Pay_Rate: 4.0,
        Premium_Due: 2000.0,
        Total_Amount: 55000.0,
      };
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      // Placeholder for editing a premium adjustment
      // In a real scenario, persist input to a database and return the updated object
      return {
        id: input.id,
        Comment: input.Comment || "Sample Comment",
        Total_Borrower_Fees: input.Total_Borrower_Fees || 1000.0,
        CU_Retail_Rate: input.CU_Retail_Rate || 3.5,
        Protected_Loan_Amount: input.Protected_Loan_Amount || 50000.0,
        Pay_Rate: input.Pay_Rate || 4.0,
        Premium_Due: input.Premium_Due || 2000.0,
        Total_Amount: input.Total_Amount || 55000.0,
      };
    },
  },
};

export default resolvers;