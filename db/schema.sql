/* SHA1(str) function for storing passwords in Mysql */
INSERT INTO `users` (`
username`,
`password
`) VALUES
('user2', SHA1
('password1'));
SELECT `password
` FROM `users` WHERE `username` = 'user2';

INSERT INTO	 Saved
    (billAmount, tipAmount, totalAmount)
Values
    ($10, $3, $13, true)
