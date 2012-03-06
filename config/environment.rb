# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Club40::Application.initialize!
Time::DATE_FORMATS[:easy] = "%a %B %d, %Y at %I:%M %p"