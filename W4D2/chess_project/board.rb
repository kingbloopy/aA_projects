require_relative "piece"
require_relative "nullpiece"
require_relative "rook"
require_relative "knight"
require_relative "bishop"
require_relative "queen"
require_relative "king"

class Board

  def initialize
    @grid = Array.new(8) {Array.new(8, Null.instance)}

    populate_back_row
  end
    
  def populate_back_row
    pieces = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook]

    pieces.each.with_index do |ele, i|
      self[[0, i]] = ele.new(:black, @grid, [0, i])
    end

    pieces.each.with_index do |ele, i|
      self[[7, i]] = ele.new(:white, @grid, [7, i])
    end
  end

  def populate_pawns
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, val)
    row, col = pos
    @grid[row][col] = val
  end

  def move_piece(start_pos, end_pos)
    raise "cant move there" if !(end_pos[0].between?(0,7) && end_pos[1].between?(0,7))
    raise "start pos is outside of board" if !(start_pos[0].between?(0,7) && start_pos[1].between?(0,7))
    raise "no piece here" if self[start_pos] == Null.instance

    move_piece!(start_pos, end_pos)
  end

  def move_piece!(start_pos, end_pos)
    self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
  end

  def valid_pos?(pos)
  end



end

