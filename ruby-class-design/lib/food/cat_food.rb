require_relative 'food'

class CatFood < Food
  def initialize
    super('CatFood')
  end

  def likes?(animal)
    animal.is_a?(Cat) || animal.is_a?(Dog)
  end
end
