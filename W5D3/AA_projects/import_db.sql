
CREATE TABLE users(
  id INTEGER PRIMARY KEY, 
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id) /* associated authors */
);

CREATE TABLE question_follows(
  id INTEGER PRIMARY KEY,
  users_id INTEGER NOT NULL,
  questions_id INTEGER NOT NULL
);


