class AttrAccessorObject
  def self.my_attr_accessor(*names)
    names.each do | name |
      
      define_method(name) { self.instance_variable_get("@#{name}".to_sym) }
      
      define_method("#{name}=") { | value | self.instance_variable_set("@#{name}".to_sym, value) }

    end
  end
end

# names.each do |name|

#     define_method(name) do
#       self.instance_variable_get("@#{name}".to_sym)
#     end

#     define_method(name) do
#       self.instance_variable_set(:@name, "new_item")
#     end

# end