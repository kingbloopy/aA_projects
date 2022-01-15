class PolyTreeNode

    attr_reader :value, :parent
    attr_accessor :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = [] 
    end

    def parent=(parent_node)
        if !self.parent.nil?
            self.parent.children.delete(self)
        end

        @parent = parent_node
        if !parent_node.nil?
            unless parent_node.children.include?(self)
                parent_node.children << self
            end
        end
    end

    def add_child(child_node)
        child_node.parent=(self)
    end

    def remove_child(child_node)
        raise "Error" if !self.children.include?(child_node)
        child_node.parent=(nil)
    end

    def dfs(target_value)
        return self if self.value == target_value

        children.each do |child|
            child_val = child.dfs(target_value)
            return child_val if child_val != nil
        end
        nil
    end

    def bfs(target_value)
        queue = []
        queue << self

        return self if self.value == target_value

        until queue.empty?
            current_node = queue.shift
            return current_node if current_node.value == target_value

            current_node.children.each do |child|
                queue << child
            end
            # queue.concat current_node.children
        end

        nil
    end

    # def bfs(target_value)
    #     arr = [self]
    #     while !arr.empty?
    #         arr.first.children.each do |child|
                
    #             if child.value == target_value
    #                 return child
    #             else
    #                 arr += child.children
    #             end
    #             arr.delete(child)
    #         end
    #     end
    #     nil
    # end

end


#   1
# 2   3
#       4