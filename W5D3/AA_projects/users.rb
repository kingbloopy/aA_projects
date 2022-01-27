

require_relative "questions_database"
require_relative "question_follows"
require_relative "replies"
require_relative "questions"
require_relative "question_likes"


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