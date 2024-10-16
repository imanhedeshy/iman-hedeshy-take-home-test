# The driver file

# Requires the files
require_relative '../lib/animal/animal'
require_relative '../lib/animal/cat'
require_relative '../lib/animal/dog'
require_relative '../lib/food/food'
require_relative '../lib/food/cat_food'
require_relative '../lib/food/dog_food'
require_relative '../lib/food/chicken'
require_relative '../lib/food/milk'
require_relative '../lib/food/human_food'
require_relative '../lib/food/lemon'

# Instantiates the classes

# Animals
cat = Cat.new
dog = Dog.new

# Foods
cat_food = CatFood.new
dog_food = DogFood.new
chicken = Chicken.new
milk = Milk.new
human_food = HumanFood.new
lemon = Lemon.new

# Invokes the methods to demonstrate the functionality
puts "Cat eats CatFood:"
cat.eat(cat_food)

puts "\nCat eats Chicken:"
cat.eat(chicken)

puts "\nCat eats Milk:"
cat.eat(milk)

puts "\nCat eats Lemon:"
cat.eat(lemon)

puts "\nDog eats DogFood:"
dog.eat(dog_food)

puts "\nDog eats CatFood:"
dog.eat(cat_food)

puts "\nDog eats Chicken:"
dog.eat(chicken)

puts "\nDog eats HumanFood:"
dog.eat(human_food)

puts "\nDog eats Lemon:"
dog.eat(lemon)