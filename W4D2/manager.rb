require_relative "employee"

class Manager < Employee
  def initialize(name, title, salary, boss)
    super(name, title, salary, boss) # manager might have a higher level manager
    @employees = []
  end

  def bonus(multiplier)
    sum = 0
    # queue = employees.dup

    # until queue.empty?
    #   current_employee = queue.pop

    employees.each do |employee|
      if employee.employees.nil?
        sum += employee.salary
      else
        sum += employee.bonus(multiplier)
      end
    end

    sum * multiplier
  end
end
