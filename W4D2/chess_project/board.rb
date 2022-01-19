require_relative "piece"

class Board

  def initialize
    @grid = Array.new(8) {Array.new(8)} # 
    @board.each_with_index do |row, r_i|
        if r_i == 0 # points to same place in memory
          row.each_with_index {|col, c_i| row[c_i] = Null.instance} # dummy piece will prevent errors
        end
      end
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

    raise "cant move there" if (end_pos[0].between?(0,7) && end_pos[1].between?(0,7))
    raise "start pos is outside of board" if (start_pos[0].between?(0,7) && start_pos[1].between?(0,7))
    raise "no piece here" if self[start_pos].nil?

    move_piece!(start_pos, end_pos)

    # piece = self[start_pos] # value at the start pos

    # if self[start_pos].nil? 
    #   raise "no piece at position"
    # end

    # if self[end_pos].nil?  #check if end position is not nil
    #   self[end_pos] = piece # reassiging the end pos given value
    #   self[start_pos] = nil # resetting start pos to "empty"
    # else
    #   raise "invalid position"
    # end
  end

  def move_piece!(start_pos, end_pos)
    self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
  end
end

# reduces space
require "singleton"
def Null
include Singleton
  def initialize
  end
end