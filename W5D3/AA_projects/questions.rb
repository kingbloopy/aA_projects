
require_relative "questions_database"
require_relative "question_follows"
require_relative "replies"
require_relative "users"
require_relative "question_likes"


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