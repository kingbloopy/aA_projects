
require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Users

  attr_accessor :fname, :lname, :id

  def self.all
    data = QuestionsDatabase.instance.execute('SELECT * FROM users')
    data.map { |datum| Users.new(datum) }
  end

  def self.find_by_name(fname, lname)
    data =QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT
        *
      FROM
        users
      WHERE
        fname = ?
      AND
        lname = ?
    SQL

    Users.new(data.first)
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL

    Users.new(data.first)
  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def authored_questions
    Questions.find_by_author_id(id)
  end

  def authored_replies
    Replies.find_by_reply_user_id(id)
  end

end

class Questions

  attr_accessor :id, :title, :body, :author_id

  def self.find_by_author_id(author_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT
        *
      FROM
        questions
      WHERE
        author_id = ?
    SQL

    Questions.new(data.first)
  end

  def self.all
    data = QuestionsDatabase.instance.execute('SELECT * FROM questions')
    data.map { |datum| Questions.new(datum) }
  end

  def self.find_title(title)
    data = QuestionsDatabase.instance.execute(<<-SQL, title)
      SELECT
        *
      FROM
        questions
      WHERE
        title = ?
    SQL

    Questions.new(data.first)
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL

    Questions.new(data.first)
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def author
    data = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT
        *
      FROM
        questions
      JOIN 
        users 
      ON
        users.id = ?
    SQL

    Users.new(data.first)
  end

  def replies
    Replies.find_by_question_subject_id(id)
  end

end

class QuestionFollows

  attr_accessor :id, :user_id, :question_id

  def self.all
    data = QuestionsDatabase.instance.execute('SELECT * FROM question_follows')
    data.map { |datum| QuestionFollows.new(datum) }
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_follows
      WHERE
        id = ?
    SQL

    QuestionFollows.new(data.first)
  end

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end

end

class Replies

  attr_accessor :id, :question_subject_id, :parent_id, :reply_user_id, :body

  def self.find_by_reply_user_id(reply_user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, reply_user_id)
      SELECT
        *
      FROM
        replies
      WHERE
        reply_user_id = ?
    SQL

    Replies.new(data.first)
  end

  def self.find_by_question_subject_id(question_subject_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_subject_id)
      SELECT
        *
      FROM
        replies
      WHERE
        question_subject_id = ?
    SQL

    Replies.new(data.first)
  end
  

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
    SQL

    Replies.new(data.first)
  end

  def self.all
    data = QuestionsDatabase.instance.execute('SELECT * FROM replies')
    data.map { |datum| Replies.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @question_subject_id = options['question_subject_id']
    @parent_id = options['parent_id']
    @reply_user_id = options['reply_user_id']
    @body = options['body']
  end

  def author
    Users.find_by_id(reply_user_id)
  end

  def question 
    Questions.find_by_id(question_subject_id)
  end
end


class QuestionLikes

  attr_accessor :id, :likes, :user_id, :question_id

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_likes
      WHERE
        id = ?
    SQL

    QuestionLikes.new(data.first)
  end

  def self.all
    data = QuestionsDatabase.instance.execute('SELECT * FROM question_likes')
    data.map { |datum| QuestionLikes.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @likes = options['likes']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end

end


