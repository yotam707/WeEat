# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Resturant, type: :model do
  it { should have_many(:reviews) }
  it { should validate_presence_of(:name) }

  describe 'resturant with a valid input' do
    let(:japanease_resturant) { FactoryBot.create(:resturant, :japanease) }
    it 'should throw error for unique name' do
      expect { FactoryBot.create(:resturant, name: japanease_resturant.name) }.to raise_error(/Name has already been taken/)
    end
  end
  describe 'resturant with a valid input' do
    let(:resturant) { FactoryBot.create(:resturant) }
    it 'should calaulate resturant rating' do
      resturant.reviews << FactoryBot.create(:review, resturant: resturant, rating: 3)
      resturant.reviews << FactoryBot.create(:review, resturant: resturant, rating: 1)
      resturant.reviews << FactoryBot.create(:review, resturant: resturant, rating: 2)
      resturant.reviews << FactoryBot.create(:review, resturant: resturant, rating: 3)
      resturant.calc_rating_avg
      expect(resturant.rating_avg).to eq(2)
    end
  end
end
