# Iman Hedeshy Take-Home Test

Hi! This repo contains my take-home test solutions for the class design challenge. I've structured the project in a way that promotes scalability, flexibility, and adherence to good coding practices. This project implements object-oriented principles with a clean separation of concerns between the animals and food classes.

---

## Class Design Overview

The challenge required me to create classes for **Cat**, **Dog**, **Chicken**, and various types of food like **CatFood**, **DogFood**, **HumanFood**, **Lemon**, and **Milk**. I followed object-oriented principles to separate the responsibilities between animals and food.

Each animal likes specific types of food, and when an animal eats food it likes, it makes a sound (three times). When it dislikes the food, it makes a sound just once. The design is flexible, and adding new animals or food types in the future will be easy.

---

## Project Structure

- **lib/**
  - **animals/**: Contains the individual animal classes (Cat, Dog, etc.).
  - **food/**: Contains the individual food classes (CatFood, DogFood, etc.).
  - **food.rb**: The base class for all food types.
  - **animal.rb**: The base class for all animals.
- **bin/**
  - **main.rb**: The driver script that instantiates the animals and invokes the methods to demonstrate the functionality.
- **Gemfile**: The project's Gemfile includes the Ruby gems needed for development.

---

## Why I Chose This Structure

1. **Separation of Concerns**:
   - Each class has a single responsibility. The animal classes handle animal-specific behavior, and the food classes manage food-specific details. This keeps the code modular and easy to maintain.
2. **Scalability**:
   - If you need to add new animals or food types in the future, you can simply extend the current structure by creating new classes. The system is flexible enough to support growth without modifying the existing logic.
3. **Dynamic Behavior**:

   - I avoided hardcoding preferences by using a dynamic method in the base classes. Each food class has a `likes?` method to determine whether a particular animal enjoys that food.

4. **Helper Scripts**:
   - To simplify running the project, I've included scripts to execute the program from the command line using `run-ruby.sh`.

---

## Suggestions for Improvement

While this design is solid for a small project, here are some potential improvements for future scalability:

1. **Add a Database**:

   - For a more advanced implementation, we could introduce a database to store the preferences of animals and food items, making the system more flexible and allowing users to add new animals and foods dynamically.

2. **Use of Polymorphism**:

   - Although the current approach works well, using more advanced object-oriented techniques like polymorphism for the `likes?` method could make the design even more robust and adaptable to changes.

3. **Test Classes**:
   - Adding unit tests for each class would help catch bugs early and ensure that the system behaves as expected. Using a testing framework like RSpec is a good practice to validate functionality.

---

## Future Enhancements

- **Dynamic Animal Preferences**:
  - In the current solution, the preferences of each animal are set within the class. However, an enhancement could involve configuring these preferences dynamically, possibly through configuration files or user input.
- **Logging and Error Handling**:
  - Adding better error handling and logging mechanisms to track the actions would make the system more robust.
