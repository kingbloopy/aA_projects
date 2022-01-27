PRAGMA foreign_keys = ON;

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

CREATE TABLE question_likes(
  id INTEGER PRIMARY KEY,
  likes INTEGER,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);


INSERT INTO
  users (fname, lname)
VALUES 
  ('Oogie', 'Booger'),
  ('Pickle', 'Rick');


INSERT INTO
  questions (title, body, author_id)
VALUES
  ('Colors', 'What color is the sun?', 1),
  ('Pickle', 'How do I become a pickle?', 2);

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  (1, 1),
  (2, 2);

INSERT INTO
  replies (question_subject_id, parent_id, reply_user_id, body)
VALUES
  (1, NULL, 2, 'Yellow'),
  (2, NULL, 1, 'Watch Rick and Morty');

INSERT INTO
  question_likes (likes, user_id, question_id)
VALUES
  (33, 1, 1),
  (5000, 2, 2);



