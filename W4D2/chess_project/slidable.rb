# can implement #moves, but needs to know what directions a piece can move in 
# (diagonally, horizonally/vertically/both)

# class that include slidable:
# Bishop/ Rook/ Queen

# HORIZONTAL_DIRS stores an array of horizontal directions
        # when a piece moves in a given direction, its row and/or its column should increment by some value
        # ex: A piece starts at position [1, 2] and it moves horizontally to the right
        # its position changes to [1,3]
        # the row increases by 0 and the column increases by 1 
        # start_pos = [3,3]
        #   0   1   2   3   4  5    6   7
        # 0[ _ , _ , _ , _ , _ , _ , _ , _ ]
        # 1[ _ , _ , _ , _ , _ , _ , _ , _ ]
        # 2[ _ , _ , _ , _ , _ , _ , _ , _ ]
        # 3[ _ , _ , _ , Q , _ , _ , _ , _ ]
        # 4[ _ , _ , _ , _ , _ , _ , _ , _ ]
        # 5[ _ , _ , _ , _ , _ , _ , _ , _ ]
        # 6[ _ , _ , _ , _ , _ , _ , _ , _ ]
        # 7[ _ , _ , _ , _ , _ , _ , _ , _ ]

module Slidable
    HORIZONTAL_DIRS = [
        [0, 1],  #right
        [0, -1]  #left
    ].freeze

    DIAGONAL_DIRS = [
        [1, 1],     #down right
        [1, -1],    #down left
        [-1, 1],    #up right
        [-1, -1]    #up left
    ].freeze

    VERTICAL_DIRS = [
        [1, 0],     #down
        [-1, 0]     #up
    ].freeze

    def horizontal_dirs
        HORIZONTAL_DIRS
    end

    def diagonal_dirs
        DIAGONAL_DIRS
    end

    def vertical_dirs
        VERTICAL_DIRS
    end

    # should return an array of places a Piece can move to
    def moves
        result = []
        possible_dir = move_dirs

        possible_dir.each do |dir|
            result.concat(grow_unblocked_moves_in_dir(dir[0], dir[1]))   #[[0,0], [1,1], [2,2]]
        end
        # iterate over each of the directions in which a slideable piece can move
        # use the Piece subclass' `#move_dirs` method to get this info
        # for each direction, collect all possible moves in that direction
            # and add them to your moves array 
            # (use the `grow_unblocked_moves_in_dir` helper method)

        # return the final array of moves (containing all possible moves in all directions)
        result
    end

    private
    def move_dirs
        # subclass implements this
        raise NotImplementedError
    end

    # this helper method is only responsible for collecting all moves in a given direction
    # the given direction is represented by two args, the combination of a dx and dy
    def grow_unblocked_moves_in_dir(dx, dy)
        possible_pos = []
        current_pos = self.pos # get the piece's current row and current column
        new_row = current_pos[0] + dx
        new_col = current_pos[1] + dy
        
        until !new_row.between?(0..7) || !new_col.between?(0..7)
            if self[new_row, new_col] == Null.instance
                possible_pos << [new_row, new_col]
                current_pos = [new_row, new_col]
            elsif self[new_row, new_col].color != self.color
                possible_pos << [new_row, new_col]
                return possible_pos
            end
        end

        possible_pos
    end

        # in a loop:
        # continually increment the piece's current row and current column to generate a new position
        # stop looping if the new position is invalid (not on the board); the piece can't move in this direction.
        # if the new position is empty, the piece can move here, so add the new position to the moves array
        # if the new position is occupied with a piece of the opposite color, the piece can move here (to capture the opposing piece), so add the new position to the moves array
            # but, the piece cannot continue to move past this piece, so stop looping
        # if the new position is occupied with a piece of the same color, stop looping

        # return the final moves array
    
end