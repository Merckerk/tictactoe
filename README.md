# tictactoe
NOTE: the database isn't published here. The query for the database is:

CREATE TABLE game_results (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  winner VARCHAR(100),
  board JSON,
  Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

NOTE: KEEP IN MIND THAT IN THE SOURCE CODE, YOUR VARIABLES SHOULD MATCH THE ONES IN YOUR DATABASE.
