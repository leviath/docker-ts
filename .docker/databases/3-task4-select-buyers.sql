USE company;

-- Select the most recent 10 Buyers ordered by creationDate
SELECT * FROM Buyer ORDER BY DATE(creationDate) DESC LIMIT 10;

-- Select the most recent 10 Buyers having two email addresses and display the email ad-
--  dresses only.
SELECT email FROM Buyer WHERE email2 IS NOT null LIMIT 10;

--  Select 20 Buyers having done a shop review (Table: BuyerShopReview)
SELECT * FROM Buyer LEFT JOIN BuyerShopReview ON BuyerShopReview.buyer_id = Buyer.id LIMIT 20;
