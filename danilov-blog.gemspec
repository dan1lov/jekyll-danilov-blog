# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "danilov-blog"
  spec.version       = "1.0.1"
  spec.authors       = ["Vladimir Danilov"]
  spec.email         = ["danilov@vlinc.ru"]

  spec.summary       = "Personal jekyll-theme for my website"
  spec.homepage      = "https://github.com/dan1lov/jekyll-danilov-blog"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
