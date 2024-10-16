require_relative 'food'

class Milk < Food
  def initialize
    super('Milk')
  end

  def likes?(animal)
    animal.is_a?(Cat) || animal.is_a?(Dog)
  end
end
