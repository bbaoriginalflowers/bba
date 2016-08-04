# require 'rack'
# require 'rack/contrib/try_static'

# 'bundle exec middleman build'

# use Rack::TryStatic,
#   root: 'build',
#   urls: %w[/],
#   try: ['.html', 'index.html', '/index.html']

# run lambda{ |env|
#     four_oh_four_page = File.expand_path("../build/404/index.html", __FILE__)
#     [ 404, { 'Content-Type'  => 'text/html'}, [ File.read(four_oh_four_page) ]]
# }

# encoding: utf-8

require File.expand_path("../rack_try_static", __FILE__)

use ::Rack::TryStatic,
  :root => "build",
  :urls => ["/"],
  :try  => [".html", "index.html", "/index.html"]

run lambda { [404, {"Content-Type" => "text/plain"}, ["File not found!"]] }