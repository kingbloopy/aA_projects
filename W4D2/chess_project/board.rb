require_relative "piece"

class Board

  def initialize
    @grid = Array.new(8) {Array.new(8)} # 
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
    piece = self[start_pos] # value at the start pos
    self[end_pos] = piece # reassiging the end pos given value
    self[start_pos] = nil # resetting start pos to "empty"
  end

end