require_relative 'piece'
require_relative 'slidable'

class Queen < Piece
    include Slidable

    def symbol
        '♕'.colorize(color)
    end

    protected
    def move_dirs
        horizontal_dirs + vertical_dirs + diagonal_dirs
    end
end