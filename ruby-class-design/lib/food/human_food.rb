require_relative 'food'

class HumanFood < Food
  def initialize
    super('HumanFood')
  end

  def likes?(animal)
    animal.is_a?(Dog)
  end
end
