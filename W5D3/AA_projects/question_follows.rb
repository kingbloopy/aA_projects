require_relative "questions_database"
require_relative "replies"
require_relative "users"
require_relative "questions"
require_relative "question_likes"


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