# can implement #moves, but needs to know what directions a piece can move in 
# (diagonally, horizonally/vertically/both)

# class that include slidable:
# Bishop/ Rook/ Queen

module Slidable
    HORIZONTAL_DIRS = [[0,1], [0, -1]]
    DIAGONAL_DIRS = [[1,1], [1, -1], [-1, 1], [-1, -1]]
    VERTICAL_DIRS = [[1,0], [-1,0]]

    def moves
        places = []
        # need to use super within the subclass in order to implement
    end

    def horizontal_dirs
        HORIZONTAL_DIRS
    end

    def diagonal_dirs
        DIAGONAL_DIRS
    end

    def vertical_dirs
        VERTICAL_DIRS
    end

    private
    def move_dirs
        
    end

    def grow_unblocked_moves_in_dir(dx, dy)
    end
end