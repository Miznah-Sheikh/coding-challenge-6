// Task 1: Function Declaration - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}

// Test Cases
calculateProfit(40, 60, 100);
calculateProfit(50, 60, 200);

// Task 2: Function Expression - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax}`);
};

// Test Cases
calculateSalesTax(100, 0.07);
calculateSalesTax(500, 0.1);

// Task 3: Arrow Function - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonus = 0;
    if (performanceRating === "Excellent") {
        bonus = salary * 0.2;
    } else if (performanceRating === "great") {
        bonus = salary * 0.1;
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05;
    }
    console.log(`Bonus: $${bonus}`);
};

// Test Cases
calculateBonus(5000, "Excellent");
calculateBonus(7000, "Great");

// Task 4: Parameters & Arguments - Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    let pricePerMonth = {
        "Basic": 10,
        "Premium": 20,
        "Enterprise": 50
    };
    
    let totalCost = (pricePerMonth[plan] * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
}

// Test Cases
calculateSubscriptionCost("Basic", 8, 10);
calculateSubscriptionCost("Premium", 12, 0);

// Task 5: Returning Values - Currency Conversion
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
}

// Test Cases
convertCurrency(100, 1.2);
convertCurrency(260, 0.85);

// Task 6: Higher-Order Function - Discount Strategy for Bulk Orders
let orders = [200, 800, 1200, 460, 900];

function applyBulkDiscount(orders, discountFunction) {
    let discountedOrders = orders.map(discountFunction);
    console.log(discountedOrders);
}

// Applying discount function
applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

// Task 7: Closures - Business Expense Tracker
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        console.log(`Total Expenses: $${totalExpenses}`);
    };
}

// Test Cases
let tracker = createExpenseTracker();
tracker(200);
tracker(150);

// Task 8: Recursion - Employees Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        console.log("Years to Level 10: 0");
        return;
    }
    console.log(`Years to Level 10: ${(10 - employeeLevel) * 2}`);
}

// Test Cases
calculateYearsToPromotion(7);
calculateYearsToPromotion(5);
