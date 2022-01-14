class PolyTreeNode

    attr_reader :value, :parent, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = [] 
    end

    def parent=(node)
        @parent = node
        children += node.children unless node.nil?
        # puts "something random"
    end

end

puts "Hello"