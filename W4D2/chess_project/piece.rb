require_relative 'slidable'

class Piece
    include Slidable

    attr_reader :board, :pos

    def initialize(color, board, pos)
        @color = color    #diagram says @color: symbol
        @board = board
        @pos = pos
    end

    def to_s
        @color.to_s
    end

    def empty?
        board[pos] == Null.instance
    end

    def valid_moves

    end

    def pos=(val)
        board[pos] = val
    end

    def symbol
        
    end

    private
    def move_into_check?(end_pos)

    end
end

#[rook, knight, bishop, queen, king, bishop, knight, rook]