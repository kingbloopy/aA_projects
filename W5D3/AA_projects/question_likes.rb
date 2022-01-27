require_relative "questions_database"
require_relative "question_follows"
require_relative "replies"
require_relative "users"
require_relative "questions"


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