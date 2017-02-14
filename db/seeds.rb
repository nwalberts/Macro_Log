Log.find_or_create_by(title: "First Log", body: "This is quite an entry")
Log.find_or_create_by(title: "Captains Log", body: "I am a captain hur dur")
Log.find_or_create_by(title: "Wooden Log", body: "What did you expect?")
Log.find_or_create_by(title: "BackLog", body: "BACK TO THE BEGINNING")


Log.all.each do |log|
  10.times do
    Review.find_or_create_by(log: log, rating: rand(4) + 1, body: Faker::Hipster.paragraph(2))
  end
end
