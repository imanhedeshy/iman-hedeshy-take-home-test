#!/bin/bash

check_status() {
    if [ $? -ne 0 ]; then
        echo "Error occurred, exiting setup."
        exit 1
    fi
}

ruby_version=$(ruby -v | awk '{print $2}')
if [[ "$ruby_version" < "3.3.5" ]]; then
    echo "Warning: This app requires Ruby 3.3.5 or higher. You currently have Ruby $ruby_version."
fi

# Install Rails Backend
echo "Setting up Rails backend..."
cd rails-backend || exit
bundle install
check_status
rails db:create || echo "Database already exists."
rails db:migrate
check_status
cd ..

# Install React Frontend
echo "Setting up React frontend..."
cd react-frontend || exit
npm install
check_status
cd ..

echo "All requirements are installed! You can now run the apps as below."

echo "Creating helper scripts to run the apps..."

# Run Rails API
echo '#!/bin/bash' >run-rails.sh
echo 'cd rails-backend && rails s' >>run-rails.sh
chmod +x run-rails.sh

# Run Ruby Class Design
echo '#!/bin/bash' >run-ruby.sh
echo 'cd ruby-class-design && ruby bin/main.rb' >>run-ruby.sh
chmod +x run-ruby.sh

# Run React Frontend
echo '#!/bin/bash' >run-react.sh
echo 'cd react-frontend && npm start' >>run-react.sh
chmod +x run-react.sh

echo "Helper scripts created. Use the following commands to run each project:"
echo "  1. For Ruby class design: ./run-ruby.sh"
echo "  2. For Rails backend: ./run-rails.sh"
echo "  3. For React frontend: ./run-react.sh"
