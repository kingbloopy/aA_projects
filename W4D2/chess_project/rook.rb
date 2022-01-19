require_relative 'piece'
require_relative 'slidable'

class Rook < Piece
    include Slidable

    def symbol
        
    end

    private
    def move_dirs
        horizontal_dirs + vertical_dirs
    end
end
