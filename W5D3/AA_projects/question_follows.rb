require_relative "questions_database"
require_relative "replies"
require_relative "users"
require_relative "questions"
require_relative "question_likes"


class QuestionFollows

  attr_accessor :id, :user_id, :question_id

  def self.followers_for_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        question_follows
      JOIN
        users
      ON
        users.id = question_follows.user_id
      WHERE
        question_id = ?
    SQL

    data.map { |datum| Users.new(datum) }
  end

  def self.followed_questions_for_user_id(user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        question_follows
      JOIN
        questions
      ON
        questions.id = question_follows.user_id
      WHERE
        user_id = ?
    SQL

    data.map { |datum| Questions.new(datum) }
  end



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