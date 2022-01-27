require_relative "questions_database"
require_relative "question_follows"
require_relative "users"
require_relative "questions"
require_relative "question_likes"


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

  def parent_reply
    Users.find_by_id(parent_id)
  end

  # def child_replies
  #   data = QuestionsDatabase.instance.execute(<<-SQL, parent_id)
  #   SELECT
  #     *
  #   FROM
  #     replies
  #   WHERE
  #     ? IS NOT NULL
  #   SQL

  #   Replies.new(data.first)
  # end

  # id, :question_subject_id, :parent_id, :reply_user_id, :body
  def create
    raise "#{self} already in database" if self.id
    QuestionsDatabase.instance.execute(<<-SQL, question_subject_id, parent_id, reply_user_id, body)
      INSERT INTO
        replies (question_subject_id, parent_id, reply_user_id, body)
      VALUES
        (?, ?, ?, ?)
    SQL
    self.id = QuestionsDatabase.instance.last_insert_row_id
  end

end
