const express = require('express');
const app = new express()


//routes
/* Welcome user to our very ugly skeleton page */
app.get('/', (req, res) => {
   res.setHeader('Content-Type', 'text/html');
   return res.end(`
   <h2>Welcome to the currency converter app</h2>
   <p>To get started, enter the following</p>
   <ol>
      <li>Enter the amount you want to change, passing in a query parameter as 'amount'</li>
      <li>Enter the currency you want to change from, with parameter of 'currencyAtHand = currency'</li>
      <li>Enter the currency you want to change to, with parameter of 'currencyToChange = currency'</li>
   </ol>
   <p>Legend: USD-dollar, GBP-pounds, Nigerian Naira-naira, Euros-euro</p>
   <p>To get started, use the '/convert/?' to input currencies</p>
   `);
})

app.get('/convert', (req, res) => {
   const amount = +(req.query.amount)
   if (req.query.currencyAtHand === 'naira' && req.query.currencyToChange === 'dollar') {
      return res.send(`Value gotten is: ${Math.round(amount / 1175)},000 naira`);
   }
   res.end();

   if (req.query.currencyAtHand === 'naira' && req.query.currencyToChange === 'pounds') {
      return res.send(`Value gotten is: ${Math.round(amount / 1525)},000 naira`);
   }
   res.end();

    if (req.query.currencyAtHand === 'naira' && req.query.currencyToChange === 'euro') {
      return res.send(`Value gotten is: ${Math.round(amount / 1295)},000 naira`);
   }
   res.end();
   
   //dollar to other currencies
    if (req.query.currencyAtHand === 'dollar' && req.query.currencyToChange === 'naira') {
      return res.send(`Value gotten is: $${Math.round(amount * 1175)},000`);
   }
   res.end();

   if (req.query.currencyAtHand === 'dollar' && req.query.currencyToChange === 'pounds') {
      return res.send(`Value gotten is: $${Math.round(amount * 0.84)},000`);
   }
   res.end();

    if (req.query.currencyAtHand === 'dollar' && req.query.currencyToChange === 'euro') {
      return res.send(`Value gotten is: $${Math.round(amount * 0.95)},000`);
   } 
   res.end();

   //pounds to other currencies
    if (req.query.currencyAtHand === 'pounds' && req.query.currencyToChange === 'naira') {
      return res.send(`Value gotten is: £${Math.round(amount * 1525)},000`);
   }
   res.end();

   if (req.query.currencyAtHand === 'pounds' && req.query.currencyToChange === 'dollar') {
      return res.send(`Value gotten is: £${Math.round(amount / 0.82)},000`);
   }
   res.end();

    if (req.query.currencyAtHand === 'pounds' && req.query.currencyToChange === 'euro') {
      return res.send(`Value gotten is: £${Math.round(amount * 1.15)},000`);
   }
   res.end();

   //euro to other currencies
    if (req.query.currencyAtHand === 'euro' && req.query.currencyToChange === 'naira') {
      return res.send(`Value gotten is: €${Math.round(amount * 1295)},000`)
   }
   res.end();

   if (req.query.currencyAtHand === 'euro' && req.query.currencyToChange === 'dollar') {
      return res.send(`Value gotten is: £${Math.round(amount / 0.95)},000`)
   }
   res.end();

    if (req.query.currencyAtHand === 'euro' && req.query.currencyToChange === 'pounds') {
      return res.send(`Value gotten is: €${Math.round(amount / 1.15)},000`)
   }
   res.end();

})

//server listening for request
app.listen(5000, ()=> {
   console.log('Server is active!!! LETS GOOO!!');
})
