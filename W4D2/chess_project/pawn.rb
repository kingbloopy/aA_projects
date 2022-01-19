require_relative 'piece'

class Pawn

  def symbol

  end

  def moves

  end

  private
  def at_start_row? # start pos should be in row 6 & row 1
    pos[0] == 6 || pos[0] == 1
  end

  def forward_dir
    # if white(row 1) then return 1
  # else return -1
    # returns 1 or -1
  end

  def forward_steps
    # forward_dir = -1
    # pos = [2, 3]

    if forward_dir == 1
      new_pos = [pos[0] + 1, pos[1]]
    else
      new_pos = [pos[0] - 1, pos[1]]
    end
    new_pos
  end

  def side_attacks
    # forward direction
    # check diagonally from forward pos- is there enemy?
    
  end

end