require_relative "piece"
require_relative "nullpiece"

class Board

  def initialize
    @grid = Array.new(8) {Array.new(8, Null.instance)}
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

end

