
CREATE TABLE users(
  id INTEGER PRIMARY KEY, 
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id) /* associated authors */
);

CREATE TABLE question_follows(
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies(
  id INTEGER PRIMARY KEY,
  question_subject_id INTEGER NOT NULL,
  parent_id INTEGER, 
  reply_user_id INTEGER NOT NULL,
  body TEXT NOT NULL,

FOREIGN KEY (question_subject_id) REFERENCES questions(id),
FOREIGN KEY (reply_user_id) REFERENCES users(id),
FOREIGN KEY (parent_id) REFERENCES replies(id)
);

