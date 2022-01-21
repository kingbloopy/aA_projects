require "byebug"
class Game

    attr_accessor :rod1, :rod2, :rod3

    def initialize
        @rod1 = [1, 2, 3]
        @rod2 = []
        @rod3 = []
    end

    # def print
        
    # end

    # def add
    # end

    # def which_start
    #     current_rod = rod1
        
    #     p "select a rod: 1, 2, or 3"
    #     input = gets.chomp
    #     if input.to_i == 2
    #         current_rod = rod2
    #     elsif input.to_i == 3
    #         current_rod = rod3
    #     end

    #     current_rod
    # end

    def ask_user
        i = 0
        while !won? || i == 0
            puts "#{rod1}, #{rod2}, #{rod3}" if i == 0
        start_rod = rod1
        
        puts "choose a rod to take a disc from: 1, 2, or 3"
        input = gets.chomp.to_i
        if input == 2
            start_rod = rod2
        elsif input == 3
            start_rod = rod3
        end

        removed_disc = start_rod.shift
        puts "chosen rod: #{start_rod}"
        puts "chosen disc: #{removed_disc}"
        ####
        end_rod = rod1

        begin
            puts "select a rod to place disc: 1, 2, or 3"
            input = gets.chomp.to_i
            if input == 2
                end_rod = rod2
            elsif input == 3
                end_rod = rod3
            end
            raise RuntimeError.new("cannot pick same rod, try again") if end_rod == start_rod

            raise RuntimeError.new("must place disc on top of larger disc") if !end_rod.empty? && removed_disc > end_rod[0]
            # if end_rod.empty? || removed_disc < end_rod[0]
                end_rod.unshift(removed_disc)
            # end 
            
        rescue RuntimeError => e
            puts e.message
            # puts "try again!"
            retry
        end
        puts "#{rod1}, #{rod2}, #{rod3}"
        i += 1
      end
      return "YOU WIN!!!"
    end

    def won?
        rods = [rod1, rod2, rod3]
        rods.any?{ |rod| (rod.length) == 3 && (rod == rod.sort) }
    end
end
